"use client";

import { Footer } from "flowbite-react";

export function BtmFooter() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Empeetex" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="tel:+919820618154">Phone, Whatsapp, Viber, Wechat: (+91) 9820618154</Footer.Link>
        <Footer.Link href="mailto:pankaj@empeetex.com">Contact us at: pankaj@empeetex.com</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}