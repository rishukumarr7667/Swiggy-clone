import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-medium mt-6 flex flex-row w-full justify-evenly gap-4 overflow-hidden bg-white p-12 text-gray-800 pb-24 border-t">
      {/* Item 1 */}
      <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
        <h3 className="text-2xl xs:text-lg font-bold flex items-center gap-2 xs:gap-1 text-gray-800">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              className="w-8 xs:w-6"
              alt="Logo"
            />
          </Link>
          <span className="hover:text-orange-400">Swiggy</span>
        </h3>
        <span> &copy; 2024 Bundl </span>
        <span> Technologies Pvt. Ltd</span>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
        <h3 className="text-lg xs:text-sm font-bold text-gray-800">Company</h3>
        <span className="text-gray-600">About</span>
        <span className="text-gray-600">Careers</span>
        <span className="text-gray-600">Team</span>
        <span className="text-gray-600">Swiggy One</span>
        <span className="text-gray-600">Swiggy Instamart</span>
        <span className="text-gray-600">Swiggy Genie</span>
      </div>

      {/* Item 3 */}
      <div className="flex flex-col gap-8 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
        <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap mb-10">
          <h3 className="text-lg font-bold xs:text-sm text-gray-800">
            Contact us
          </h3>
          <span className="text-gray-600">Help & Support</span>
          <span className="text-gray-600">Partner with us</span>
          <span className="text-gray-600">Ride with us</span>
        </div>
        <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
          <h3 className="text-lg font-bold xs:text-sm text-gray-800"> Legal</h3>
          <span className="text-gray-600">Terms & Conditions</span>
          <span className="text-gray-600">Cookie Policy</span>
          <span className="text-gray-600">Privacy Policy</span>
        </div>
      </div>

      {/* Item 4 */}
      <div className="flex flex-col gap-2 xs:gap-1 whitespace-nowrap sm:overflow-hidden">
        <h3 className="text-lg xs:text-sm font-bold text-gray-800">
          We deliver to:
        </h3>
        <span className="text-gray-600">Bangalore</span>
        <span className="text-gray-600">Gurgaon</span>
        <span className="text-gray-600">Hyderabad</span>
        <span className="text-gray-600">Delhi</span>
        <span className="text-gray-600">Mumbai</span>
        <span className="text-gray-600">Pune</span>
      </div>
    </div>
  );
}

export default Footer;
