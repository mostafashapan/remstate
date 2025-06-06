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
      className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm"
      aria-label="Progress steps navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-3 overflow-x-auto no-scrollbar py-3 sm:py-4">
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