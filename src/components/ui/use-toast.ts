import { useState, useEffect } from "react"

const TOAST_LIMIT = 1

interface ToastProps {
  id?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number;
  variant?: "default" | "destructive";
  className?: string;
  dismiss?: () => void;
}

interface ToastState {
  toasts: ToastProps[];
}

type ToastListener = (state: ToastState) => void;

let count = 0
function generateId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

const toastStore = {
  state: {
    toasts: [] as ToastProps[],
  } as ToastState,
  listeners: [] as ToastListener[],
  
  getState: () => toastStore.state,
  
  setState: (nextState: ToastState | ((state: ToastState) => ToastState)) => {
    if (typeof nextState === 'function') {
      toastStore.state = nextState(toastStore.state)
    } else {
      toastStore.state = { ...toastStore.state, ...nextState }
    }
    
    toastStore.listeners.forEach(listener => listener(toastStore.state))
  },
  
  subscribe: (listener: ToastListener) => {
    toastStore.listeners.push(listener)
    return () => {
      toastStore.listeners = toastStore.listeners.filter(l => l !== listener)
    }
  }
}

export const toast = ({ ...props }: Omit<ToastProps, 'id' | 'dismiss'>) => {
  const id = generateId()

  const update = (props: Partial<ToastProps>) =>
    toastStore.setState((state: ToastState) => ({
      ...state,
      toasts: state.toasts.map((t: ToastProps) =>
        t.id === id ? { ...t, ...props } : t
      ),
    }))

  const dismiss = () => toastStore.setState((state: ToastState) => ({
    ...state,
    toasts: state.toasts.filter((t: ToastProps) => t.id !== id),
  }))

  toastStore.setState((state: ToastState) => ({
    ...state,
    toasts: [
      { ...props, id, dismiss },
      ...state.toasts,
    ].slice(0, TOAST_LIMIT),
  }))

  return {
    id,
    dismiss,
    update,
  }
}

export function useToast() {
  const [state, setState] = useState(toastStore.getState())
  
  useEffect(() => {
    const unsubscribe = toastStore.subscribe((state: ToastState) => {
      setState(state)
    })
    
    return unsubscribe
  }, [])
  
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []

    state.toasts.forEach((toast: ToastProps) => {
      if (toast.duration === Infinity) {
        return
      }

      const timeout = setTimeout(() => {
        toast.dismiss?.()
      }, toast.duration || 5000)

      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout))
    }
  }, [state.toasts])

  return {
    toast,
    toasts: state.toasts,
  }
}
