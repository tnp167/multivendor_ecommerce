import CategoryDetails from "@/components/dashboard/Forms/CategoryDetails";
import React from "react";

const AdminNewCategoryPage = () => {
  const CLOUDINARY_CLOUD_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME;

  if (!CLOUDINARY_CLOUD_KEY) return null;
  return (
    <div className="w-full">
      <CategoryDetails cloudinary_key={CLOUDINARY_CLOUD_KEY} />
    </div>
  );
};

export default AdminNewCategoryPage;
