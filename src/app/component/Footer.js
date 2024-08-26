"use client";

import { Footer } from "flowbite-react";

export function BtmFooter() {
  return (
    <div className="flex justify-center items-center p-5 text-center border-t flex-wrap bg-slate-50">
      <span className="p-3">&copy; Empeetex</span>
      <a className="p-3" href="tel:+919820618154">Phone, Whatsapp, Viber, Wechat: <span className=" underline text-blue-500">(+91) 9820618154</span></a>
      <a className="p-3" href="mailto:pankaj@empeetex.com">Contact us at: <span className="underline text-blue-500">pankaj@empeetex.com</span></a>
    </div>
  );
}