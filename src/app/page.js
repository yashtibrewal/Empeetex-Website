import Awards from "./component/Awards";
import { BtmFooter } from "./component/Footer";
import Landing from "./component/Landing";
import { Management } from "./component/Management";
import { Network } from "./component/Network";
import { Products } from './component/Products';
import { Certificates } from './component/Certificates'

export default function Home() {
  return (
    <main>
      <div
        className="
          space-y-8 md:space-y-16 lg:space-y-32 
          bg-gradient-to-b from-pink-200  via-amber-100 to-orange-300
          px-4 md:px-24 lg:px-16 xl:px-48 pb-2 md:pb-4 lg:pb-8xl:pb-16">
        <Landing></Landing>
        <Products></Products>
        <Network></Network>
        <Awards></Awards>
        <Certificates></Certificates>
        <Management></Management>
      </div>
      <div>
        <BtmFooter></BtmFooter>
      </div>
    </main>
  );
}
