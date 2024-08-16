'use client'

import { Button } from "@/components/ui/button";
// import { createDocument } from "@/convex/documents";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import UploadDcoumentForm from "./upload-document-form";
import { useState } from "react";
  

export default function CreateDocumentButton() {
const [isOpen,setIsOpen]=useState(false);
  return (

  <Dialog onOpenChange={setIsOpen} open={isOpen}>

  <DialogTrigger asChild>
    <Button>Upload Document</Button>
   </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Upload a Document.</DialogTitle>
      <DialogDescription>
        Uplaod a team Document for search in future.
      </DialogDescription>
      <UploadDcoumentForm onUpload= {()=>setIsOpen(false)}/>
    </DialogHeader>
  </DialogContent>
</Dialog>
 
  )
}
