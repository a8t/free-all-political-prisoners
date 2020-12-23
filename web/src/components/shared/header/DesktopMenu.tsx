import React from "react";
import {
  FaRegEnvelope,
  FaRegCalendarAlt,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaUsers,
  FaBook,
  FaToolbox,
} from "react-icons/fa";
import DesktopMenuItem from "./DesktopMenuItem";

const DesktopMenu = ({ shouldHeaderBeTransparent }) => (
  <nav className="hidden md:flex justify-center self-center md:ml-auto md:mr-2 xl:mr-auto">
    <DesktopMenuItem
      shouldHeaderBeTransparent={shouldHeaderBeTransparent}
      linkTo="/learn"
      name="Learn"
      itemIconBackgroundColor="bg-yellow-500"
      itemLinkColor="text-yellow-600"
      items={[
        {
          icon: <FaQuestionCircle className="w-5 h-5" />,
          title: "Resources",
          body: "Prisoner profiles, sample letters",
          linkUrl: "/resources",
        },
        {
          icon: <FaExclamationTriangle className="w-5 h-5" />,
          title: "Urgent release",
          body: "See the 40 elderly, ill, pregnant, and nursing prisoners.",
          linkUrl: "/learn#urgent-release",
        },
        {
          icon: <FaUsers className="w-6 h-6" />,
          title: "All prisoners",
          body: "A growing archive of the political prisoners in the Philippines",
          linkUrl: "/learn#all-prisoners",
        },
      ]}
      extraLinks={[{ text: "See all resources", linkUrl: "/learn", icon: <FaBook /> }]}
    />
    <DesktopMenuItem
      shouldHeaderBeTransparent={shouldHeaderBeTransparent}
      linkTo="/act"
      name="Act"
      itemIconBackgroundColor="bg-teal-500"
      itemLinkColor="text-teal-600"
      items={[
        {
          title: "Adopt a prisoner",
          body: "Make a lasting impact.",
          icon: <FaRegEnvelope className="w-6 h-6" />,
          linkUrl: "/adopt",
        },
        {
          title: "Write",
          body: "Be a voice for the voiceless.",
          icon: <FaRegEnvelope className="w-6 h-6" />,
          linkUrl: "/write",
        },

        {
          title: "Calendar of Activities",
          body: "Learn about upcoming webinars, days of action, and more.",
          icon: <FaRegCalendarAlt className="w-6 h-6" />,
          linkUrl: null,
          disabled: true,
        },
      ]}
      extraLinks={[{ text: "See all forms of action", linkUrl: "/act", icon: <FaToolbox /> }]}
    />
    <DesktopMenuItem
      shouldHeaderBeTransparent={shouldHeaderBeTransparent}
      linkTo="/join"
      name="Join"
    />
  </nav>
);

export default DesktopMenu;
