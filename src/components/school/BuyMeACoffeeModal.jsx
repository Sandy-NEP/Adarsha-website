import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Coffee, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const BuyMeACoffeeModal = ({ isOpen, onClose, paymentOptions, developerName }) => {
  const { toast } = useToast();

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to Clipboard!",
      description: `${fieldName} copied successfully.`,
      className: "bg-green-500 text-white border-none",
    });
  };

  if (!paymentOptions) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] bg-card/80 backdrop-blur-lg border-border shadow-2xl rounded-xl">
        <DialogHeader className="text-center">
          <div className="inline-block p-3 bg-primary/10 rounded-full mx-auto mb-4">
            <Coffee className="h-8 w-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gradient">Support {developerName}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            If you like this website, consider supporting the developer with a coffee!
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-6 space-y-6">
          {paymentOptions.esewa && (
            <div className="p-4 rounded-lg bg-background/70 border border-border">
              <div className="flex justify-between items-center">
                <div>
                  <img src="/esewa-logo.png" alt="eSewa" className="h-8 mb-1" />
                  <p className="text-sm text-muted-foreground">eSewa ID</p>
                  <p className="font-semibold text-foreground">{paymentOptions.esewa}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(paymentOptions.esewa, "eSewa ID")}>
                  <Copy className="h-5 w-5 text-primary" />
                </Button>
              </div>
            </div>
          )}

          {paymentOptions.khalti && (
            <div className="p-4 rounded-lg bg-background/70 border border-border">
              <div className="flex justify-between items-center">
                <div>
                  <img src="/khalti-logo.png" alt="Khalti" className="h-8 mb-1" />
                  <p className="text-sm text-muted-foreground">Khalti ID</p>
                  <p className="font-semibold text-foreground">{paymentOptions.khalti}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(paymentOptions.khalti, "Khalti ID")}>
                  <Copy className="h-5 w-5 text-primary" />
                </Button>
              </div>
            </div>
          )}
          
          {paymentOptions.bank && (
            <div className="p-4 rounded-lg bg-background/70 border border-border">
              <div className="flex justify-between items-center">
                <div>
                  <img src="/bank-logo.png" alt="Bank" className="h-8 mb-1" />
                  <p className="text-sm text-muted-foreground">{paymentOptions.bank.name}</p>
                  <p className="font-semibold text-foreground">{paymentOptions.bank.acc}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(paymentOptions.bank.acc, "Bank Account")}>
                  <Copy className="h-5 w-5 text-primary" />
                </Button>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="sm:justify-center">
          <Button variant="outline" onClick={onClose} className="border-primary text-primary hover:bg-primary/10">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BuyMeACoffeeModal;