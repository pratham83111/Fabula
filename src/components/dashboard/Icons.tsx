import type { ReactNode } from "react";

function I({ children, size = 22 }: { children: ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}
export const MenuIcon = () => <I size={28}><path d="M3 6h18M3 12h18M3 18h18" /></I>;
export const CloseIcon = () => <I><path d="M6 6l12 12M18 6L6 18" /></I>;
export const BellIcon = () => <I size={24}><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21a2 2 0 0 0 4 0" /></I>;
export const SearchIcon = () => <I size={20}><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></I>;
export const PlusIcon = ({ size = 22 }: { size?: number }) => <I size={size}><path d="M12 5v14M5 12h14" /></I>;
export const ArrowLeft = () => <I size={34}><path d="M20 12H4M10 6l-6 6 6 6" /></I>;
export const ArrowRight = () => <I size={34}><path d="M4 12h16M14 6l6 6-6 6" /></I>;
export const ChevL = () => <I size={16}><path d="M15 6l-6 6 6 6" /></I>;
export const ChevR = () => <I size={16}><path d="M9 6l6 6-6 6" /></I>;
export const FileIcon = () => <I size={18}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></I>;
export const TrashIcon = () => <I size={20}><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></I>;
export const ReplyIcon = () => <I size={22}><path d="M10 8V4L3 11l7 7v-4c6 0 9 2 11 6-1-7-5-12-11-12z" /></I>;
export const DotsV = () => <I size={20}><circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" /></I>;
export const DotsH = () => <I size={20}><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></I>;
export const ClipIcon = () => <I size={24}><path d="M21 11l-9 9a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8" /></I>;
export const SmileIcon = () => <I size={24}><circle cx="12" cy="12" r="9" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9.5h.01M15 9.5h.01" /></I>;
export const ImageIcon = () => <I size={24}><rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="9" cy="10" r="1.5" /><path d="M21 16l-5-5-9 9" /></I>;
export const PayoneerMark = () => <I size={26}><path d="M5 18c4-1 7-5 8-12M8 12c3 1 6 1 11-3" /></I>;
export const BackIcon = () => <I size={20}><path d="M19 12H5M11 6l-6 6 6 6" /></I>;

export const NavIcons: Record<string, ReactNode> = {
  Profile: <I size={20}><circle cx="12" cy="8" r="4" /><path d="M4 21c1-5 15-5 16 0" /></I>,
  "My Bids": <I size={20}><path d="M4 7h16v13H4zM9 7V4h6v3" /></I>,
  Messages: <I size={20}><path d="M4 5h16v11H9l-5 4z" /></I>,
  Notifications: <I size={20}><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21a2 2 0 0 0 4 0" /></I>,
  Membership: <I size={20}><path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z" /></I>,
  Payments: <I size={20}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /></I>,
  "Account Settings": <I size={20}><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></I>,
};
