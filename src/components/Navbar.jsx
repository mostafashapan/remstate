import React from 'react';
import {
  LocationOnOutlined as LocationIcon,
  DeleteOutlined as WasteIcon,
  LocalShippingOutlined as TruckIcon,
  SecurityOutlined as ShieldIcon,
  CalendarTodayOutlined as CalendarIcon,
  CreditCardOutlined as CardIcon,
} from '@mui/icons-material';
import Step from './shared/Step';
import Divider from './shared/Divider';

const Navbar = () => {
  return (
    <nav
    className="w-full bg-white/10 border-b border-white/20 sticky top-0 z-50 shadow-sm backdrop-blur-md"
    aria-label="Progress steps navigation"
  >
  
  
   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center space-x-0 sm:space-x-3 overflow-x-auto no-scrollbar py-2 sm:py-2 scroll-smooth snap-x">
          <Step icon={<LocationIcon />} label="Postcode" active />
          <Divider active />
          <Step icon={<WasteIcon />} label="Waste Type" active />
          <Divider active />
          <Step icon={<TruckIcon />} label="Select Skip" active />
          <Divider />
          <Step icon={<ShieldIcon />} label="Permit Check" disabled />
          <Divider />
          <Step icon={<CalendarIcon />} label="Choose Date" disabled />
          <Divider />
          <Step icon={<CardIcon />} label="Payment" disabled />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
