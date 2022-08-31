import React from "react";
import ZIPCodeSearch from "pages/ZIPCodeSearch";
import LoyaltySystem from "pages/LoyaltySystem";
import StoreCredits from "pages/StoreCredits";
import ShoppingCart from "pages/ShoppingCart";
import ShippingChargeCalculator from "pages/ShippingChargeCalculator";
import ShippingAddressValidation from "pages/ShippingAddressValidation";
import ProductQuickview from "pages/ProductQuickview";
import FreeCredits from "pages/FreeCredits";
import GuestLogin from "pages/GuestLogin";
import Dashboard from "pages/Dashboard";
import CouponCodeGenerator from "pages/CouponCodeGenerator";
import AuctionBIdding from "pages/AuctionBIdding";
import Wishlist from "pages/Wishlist";
import Favourites from "pages/Favourites";
import DiscountsOffers from "pages/DiscountsOffers";
import AffiliateURL from "pages/AffiliateURL";
import InteractiveFAQs from "pages/InteractiveFAQs";
import CommunityForum from "pages/CommunityForum";
import Pagination from "pages/Pagination";
import BlogPostsManagement from "pages/BlogPostsManagement";
import BlogImporting from "pages/BlogImporting";
import ManageBlogComments from "pages/ManageBlogComments";
import TermsAndConditions from "pages/TermsAndConditions";
import AccountCreation from "pages/AccountCreation";
import GoogleLogin from "pages/GoogleLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/googlelogin" element={<GoogleLogin />} />
        <Route path="/accountcreation" element={<AccountCreation />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/manageblogcomments" element={<ManageBlogComments />} />
        <Route path="/blogimporting" element={<BlogImporting />} />
        <Route path="/blogpostsmanagement" element={<BlogPostsManagement />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/communityforum" element={<CommunityForum />} />
        <Route path="/interactivefaqs" element={<InteractiveFAQs />} />
        <Route path="/affiliateurl" element={<AffiliateURL />} />
        <Route path="/discountsoffers" element={<DiscountsOffers />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/auctionbidding" element={<AuctionBIdding />} />
        <Route path="/couponcodegenerator" element={<CouponCodeGenerator />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/guestlogin" element={<GuestLogin />} />
        <Route path="/freecredits" element={<FreeCredits />} />
        <Route path="/productquickview" element={<ProductQuickview />} />
        <Route
          path="/shippingaddressvalidation"
          element={<ShippingAddressValidation />}
        />
        <Route
          path="/shippingchargecalculator"
          element={<ShippingChargeCalculator />}
        />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/storecredits" element={<StoreCredits />} />
        <Route path="/loyaltysystem" element={<LoyaltySystem />} />
        <Route path="/zipcodesearch" element={<ZIPCodeSearch />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
