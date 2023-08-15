import { FaHome, FaChartPie, FaFileInvoice, FaCalendarAlt, FaRegCalendarAlt, FaRegCommentAlt, FaRegBell, FaCog } from 'react-icons/fa';
const links = [
  {
    id: 1,
    text: 'Dashboard',
    icon: <FaHome size={24} />,
    path: '/',
  },

  {
    id: 2,
    text: 'Analytics',
    icon: <FaChartPie size={24} />,
    path: '/analytics',
  },
  {
    id: 3,
    text: 'Invoice',
    icon: <FaFileInvoice size={24} />,
    path: '/invoice',
  },
  {
    id: 4,
    text: 'Schedule',
    icon: <FaCalendarAlt size={24} />,
    path: '/schedule',
  },
  {
    id: 5,
    text: 'Calendar',
    icon: <FaRegCalendarAlt size={24} />,
    path: '/calendar',
  },
  {
    id: 6,
    text: 'Chat',
    icon: <FaRegCommentAlt size={24} />,
    path: '/chat',
  },
  {
    id: 7,
    text: 'Notification',
    icon: <FaRegBell size={24} />,
    path: '/notification',
  },
  {
    id: 8,
    text: 'Settings',
    icon: <FaCog size={24} />,
    path: '/settings',
  },
];

export default links;
