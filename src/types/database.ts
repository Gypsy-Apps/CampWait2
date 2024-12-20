export interface Organization {
  id: string;
  name: string;
  created_at: string;
}

export interface Campground {
  id: string;
  org_id: string;
  name: string;
  location: string;
  created_at: string;
}

export interface Site {
  id: string;
  campground_id: string;
  name: string;
  type: 'RV' | 'Tent' | 'Cabin';
  capacity: number;
  price_per_night: number;
  status: 'Available' | 'Occupied' | 'Maintenance';
  created_at: string;
}

export interface Booking {
  id: string;
  site_id: string;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  check_in: string;
  check_out: string;
  status: 'Confirmed' | 'Cancelled' | 'Completed';
  created_at: string;
}

export interface WaitlistEntry {
  id: string;
  campground_id: string;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  preferred_dates: string;
  site_type: string;
  status: 'Active' | 'Fulfilled' | 'Cancelled';
  created_at: string;
}

export interface Staff {
  id: string;
  user_id: string;
  org_id: string;
  campground_id: string;
  role: 'Manager' | 'Staff';
  created_at: string;
}