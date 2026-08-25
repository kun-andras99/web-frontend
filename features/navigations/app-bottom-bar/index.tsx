import CommunityIconSVG from "@/features/navigations/app-bottom-bar/icons/CommunityIconSVG";
import CruiseIconSVG from "@/features/navigations/app-bottom-bar/icons/CruiseIconSVG";
import ExtraIconSVG from "@/features/navigations/app-bottom-bar/icons/ExtraIconSVG";
import HeartIconSVG from "@/features/navigations/app-bottom-bar/icons/HeartIconSVG";
import InboxIconSVG from "@/features/navigations/app-bottom-bar/icons/InboxIconSVG";

export default function AppBottomBar() {
  return <div  className="bottom-bar">
    <div>
        <ExtraIconSVG />
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
    <div>
        <CommunityIconSVG />
    </div>
  </div>;
}
