import React from "react";
import {
  LocationOnOutlined as LocationIcon,
  DeleteOutlined as WasteIcon,
  LocalShippingOutlined as TruckIcon,
  SecurityOutlined as ShieldIcon,
  CalendarTodayOutlined as CalendarIcon,
  CreditCardOutlined as CardIcon,
} from "@mui/icons-material";
import Step from "./shared/Step";
import Divider from "./shared/Divider";

const Navbar = () => {
  return (
    <nav
      className="w-full bg-white top-0 z-50 shadow-sm backdrop-blur-md"
      aria-label="Progress steps navigation"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Mobile - compact view with all steps */}
        <div className="sm:hidden w-full py-2 overflow-x-auto scrollbar-hide">
          <div className="flex items-center min-w-max">
            <Step 
              icon={<LocationIcon />} 
              label="Postcode" 
              active 
              tooltip="Step 1: Enter your postcode"
              compact
            />
            <Divider active />
            <Step 
              icon={<WasteIcon />} 
              label="Waste" 
              active 
              tooltip="Step 2: Select waste type"
              compact
            />
            <Divider active />
            <Step 
              icon={<TruckIcon />} 
              label="Skip" 
              active 
              tooltip="Step 3: Choose skip size"
              compact
            />
            <Divider />
            <Step 
              icon={<ShieldIcon />} 
              label="Permit" 
              disabled 
              tooltip="Step 4: Permit check (coming next)"
              compact
            />
            <Divider />
            <Step 
              icon={<CalendarIcon />} 
              label="Date" 
              disabled 
              tooltip="Step 5: Select collection date"
              compact
            />
            <Divider />
            <Step 
              icon={<CardIcon />} 
              label="Pay" 
              disabled 
              tooltip="Step 6: Payment details"
              compact
            />
          </div>
        </div>
        
        {/* Desktop - full view */}
        <div className="hidden sm:flex items-center justify-center w-full space-x-0 sm:space-x-3 py-2">
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
