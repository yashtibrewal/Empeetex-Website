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
          bg-gradient-to-b from-orange-200 to-orange-400
          px-4 pb-2 xl:px-32 xl:pb-16 lg:px-16 lg:pb-8 md:px-8 md:pb-4 ">
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
