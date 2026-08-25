import CommunityIconSVG from "@/features/navigations/app-bottom-bar/icons/CommunityIconSVG";
import CruiseIconSVG from "@/features/navigations/app-bottom-bar/icons/CruiseIconSVG";
import ExtraIconSVG from "@/features/navigations/app-bottom-bar/icons/ExtraIconSVG";
import HeartIconSVG from "@/features/navigations/app-bottom-bar/icons/HeartIconSVG";
import InboxIconSVG from "@/features/navigations/app-bottom-bar/icons/InboxIconSVG";
import Image from "next/image";

export default function AppBottomBar() {
  return <div  className="bottom-bar">
    <div>
        <ExtraIconSVG />
    </div>
    <div>
        <CommunityIconSVG />
    </div>
    <div>
        <CruiseIconSVG />
    </div>
    <div>
        <HeartIconSVG />
    </div>
    <div>
        <InboxIconSVG />
    </div>
    <div className="bottom-avatar-container">
        <Image
        className="bottom-avatar-pic"
      src="/assets/images/user-blank-1.png"
      alt="Profile"
      width={34}
      height={34}
    />
    <div className="bottom-avatar-menu-box"></div>
    </div>
  </div>;
}
