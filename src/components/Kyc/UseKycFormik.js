import { useFormik } from "formik";
import * as Yup from "yup";

export const useKycFormik = (onSubmit) => {
  return useFormik({
    initialValues: {
      aadhaarNumber: "",
      panNumber: "",
      aadhaarFront: null,
      aadhaarBack: null,
      panCardPic: null,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      aadhaarNumber: Yup.string().required("Aadhaar number is required"),
      panNumber: Yup.string().required("PAN number is required"),
      aadhaarFront: Yup.mixed().required("Aadhaar front image is required"),
      aadhaarBack: Yup.mixed().required("Aadhaar back image is required"),
      panCardPic: Yup.mixed().required("PAN card image is required"),
    }),
    onSubmit,
  });
};
