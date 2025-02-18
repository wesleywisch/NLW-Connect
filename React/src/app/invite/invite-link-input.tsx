"use client" // Comando que fala para o Next enviar o javascript ao navegador
import { Copy, Link } from "lucide-react";

import { InputField, InputIcon, InputRoot } from "../../components/Input";
import { IconButton } from "../../components/IconButton";

type InviteLinkInputProps = {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps){
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField 
        readOnly 
        defaultValue={inviteLink}
      />

      <IconButton 
        className="-mr-2"
        onClick={copyInviteLink}
      >
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}