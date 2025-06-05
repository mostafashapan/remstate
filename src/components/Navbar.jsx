import React from 'react';
import {
  LocationOnOutlined as LocationOnIcon,
  DeleteOutlined as DeleteIcon,
  LocalShippingOutlined as LocalShippingIcon,
  SecurityOutlined as ShieldIcon,
  CalendarTodayOutlined as CalendarTodayIcon,
  CreditCardOutlined as CreditCardIcon,
} from '@mui/icons-material';
import Step from './shared/Step';
import Divider from './shared/Divider';

const Navbar = () => {
  return (
    <nav className="top-3 left-0 w-full text-white z-50 shadow-lg">
      {/* Progress Step Bar - Centered Container */}
      <div className="w-full py-9 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center overflow-x-auto space-x-4 md:space-x-6">
            <Step icon={<LocationOnIcon />} label="Postcode" active />
            <Divider active />
            <Step icon={<DeleteIcon />} label="Waste Type" active />
            <Divider />
            <Step icon={<LocalShippingIcon />} label="Select Skip" active />
            <Divider />
            <Step icon={<ShieldIcon />} label="Permit Check" disabled />
            <Divider />
            <Step icon={<CalendarTodayIcon />} label="Choose Date" disabled />
            <Divider />
            <Step icon={<CreditCardIcon />} label="Payment" disabled />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
