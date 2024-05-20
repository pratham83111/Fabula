import { IMenuData } from "@/types/menu-data-type";

const userRole: string = "contractor"; 
const determineActiveLink = (role: string): string => {
  if (role === "company") {
    return "/company";
  } else if (role === "contractor") {
    return "/contractor";
  }
     
  return "/";
};
const menu_data:IMenuData[] = [
  {
    id:1,
    link:'/',
    title:'Home',
    sub_menus:[
      {link:'/',title:'Home '},
      {link:'/home-2',title:'Home 2'},
      {link:'/home-3',title:'Home 3'},
      {link:'/home-4',title:'Home 4'},
      {link:'/home-5',title:'Home 5'},
      {link:'/home-6',title:'Home 6'},
      {link:'/home-7',title:'Home 7'},
    ]
  },
  // {
  //   id:2,
  //   link:'/contract-list',
  //   title:'Tenders',
  //   sub_menus:[
  //     {link:'/contract-list-v1',title:'contract List style -1'},
  //     {link:'/contract-list-v2',title:'contract List style -2'},
  //     {link:'/contract-list',title:'contract List style -3'},
  //     {link:'/contract-grid-v1',title:'contract Grid style -1'},
  //     {link:'/contract-grid-v2',title:'contract Grid style -2'},
  //     {link:'/contract-grid-v3',title:'contract Grid style -3'},
  //     {link:'/contract-details-v1',title:'contract Details v-1'},
  //     {link:'/contract-details-v2',title:'contract Details v-2'},
  //     {link:'/contract-wishlist',title:'contract Wishlist'},
  //   ]
  // },
  {
    id: 3,
    link: userRole === 'contractor' ? '/company' : '/contractor',
  title: userRole === 'contarctor' ? 'Company' : 'Bidder',
    mega_menus: [
      {
        id: 1,
        title: 'Contractor',
        sub_menus:userRole === 'company' ? [
          { link: '/contract-list-v1', title: 'Contract List style -1' },
          { link: '/contract-list-v2', title: 'Contract List style -2' },
          { link: '/contract-list', title: 'Contract List style -3' },
          { link: '/contract-grid-v1', title: 'Contract Grid style -1' },
          { link: '/contract-grid-v2', title: 'Contract Grid style -2' },
          { link: '/contract-grid-v3', title: 'Contract Grid style -3' },
          { link: '/contract-details-v1', title: 'Contract Details v-1' },
          { link: '/contract-details-v2', title: 'Contract Details v-2' },
          { link: '/contract-wishlist', title: 'Contract Wishlist' },
        ]:[
          { title: 'Company V-1', link: '/company-v1' },
          { title: 'Company V-2', link: '/company-v2' },
          { title: 'Company V-3', link: '/company-v3' },
          { title: 'Company V-4', link: '/company-v4' },
          { title: 'Company Details', link: '/company-details' },

        ]
      },
      {
        id: 2,
        title: 'Company',
        sub_menus: [
          { title: 'Company V-1', link: '/company-v1' },
          { title: 'Company V-2', link: '/company-v2' },
          { title: 'Company V-3', link: '/company-v3' },
          { title: 'Company V-4', link: '/company-v4' },
          { title: 'Company Details', link: '/company-details' },
        ]
      },
      {
        id: 3,
        title: 'Essential',
        sub_menus: [
          { title: 'About Us', link: '/about-us' },
          { title: 'Pricing', link: '/pricing' },
          { title: 'FAQ', link: '/faq' },
          { title: 'Register', link: '/register' },
        ]
      },
    ]
  },

  {
    id:4,
    link:'/blogs',
    title:'Blog',
    sub_menus:[
      {link:'/blogs',title:'Blog Standard'},
      {link:'/blog-v2',title:'Blog Grid'},
      {link:'/blog-v3',title:'Full width'},
      {link:'/blog-details',title:'Blog Details'},
    ]
  },
  {
    id:5,
    link:'/contact',
    title:'Contact'
  },
  {
    id: 6,
    link: determineActiveLink(userRole), 
    title: "Dashboard",
    sub_menus: [
      { link: "/contractor", title: "Contractor Dashboard" },
      { link: "/company", title: "Company Dashboard" },
    ],
  },
]

export default menu_data;