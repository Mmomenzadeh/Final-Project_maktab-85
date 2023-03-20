import { Button, Input, TextEditor } from "Components";
import React, { useEffect } from "react";
import { CgCloseR } from "react-icons/cg";
import { useForm } from "react-hook-form";
import "../../../Assets/Styles/Components/Modal/index.scss";
import { useDispatch } from "react-redux";
import {
  createProduct,
  editeProduct,
  fetchProducts,
} from "Redux/Slices/ProductSlice";
import { EditeProductService } from "API";
import { toast } from "react-toastify";

export const AddEditeProductModal = ({
  setShowProductModal,
  showProductModal,
}) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  ///----------------------------------------------------------------------------
  const { data, type } = showProductModal;
  useEffect(() => {
    if (type === "edite") {
      reset(data);
    }
  }, [reset]);

  const onSubmit = (data) => {
    if (type === "addProduct") {
      dispatch(createProduct(data));
      debugger
      setShowProductModal({ ...showProductModal, status: false });
    } else {
      EditeProductService(data.id, data)
        .then(() => {
          toast.success("با موفقیت ویرایش شد")
        })
        .catch((err) => {
          toast.error("ویرایش نا موفق")
          console.log(err);
        })
        .finally(() => {
          dispatch(fetchProducts());
          setShowProductModal({ ...showProductModal, status: false });
        });
    }
  };

  ///---------------------------------------------------------------------------
  return (
    <div className="modal">
      <div className="background"></div>
      <form className="modalContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="modalContainer__header">
          <p className="modalContainer__header__title">افزودن / ویرایش کالا</p>
          <CgCloseR
            onClick={() =>
              setShowProductModal({ ...showProductModal, status: false })
            }
            className="modalContainer__header__icon"
          />
        </div>
        <div className="line-h"></div>
        <div className="modalContainer__body flex col gap-2">
          <div className="modalContainer__body__imgProduct flex col gap-1">
            <label className="modalContainer__body__lbl">تصویر کالا :</label>
            <Input
              type="file"
              className="modal"
              validate={{
                ...register("img", {
                  required: "وارد کردن عکس کالا الزامی ست ",
                }),
              }}
            />
            {errors.img && <p className="error">{errors.img.message}</p>}
          </div>
          <div className="modalContainer__body__nameProduct flex col gap-1">
            <label className="modalContainer__body__lbl"> نام کالا :</label>
            <Input
              type="text"
              holder="نام کالا را وارد کنید "
              className="modal"
              validate={{
                ...register("name", {
                  required: "وارد کردن نام کالا الزامی ست",
                  // minLength: 3,
                }),
              }}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className="flex gap-1">
            <div className="modalContainer__body__nameProduct flex col gap-1">
              <label className="modalContainer__body__lbl"> برند کالا :</label>
              <Input
                type="text"
                holder="برند کالا را وارد کنید "
                className="modal"
                validate={{
                  ...register("brand", {
                    required: "وارد کردن برند کالا الزامی ست",
                    // minLength: 3,
                  }),
                }}
              />
              {errors.brand && <p className="error">{errors.brand.message}</p>}
            </div>
            <div
              className="modalContainer__body__nameProduct flex col gap-1"
              style={{ width: "45rem" }}
            >
              <label className="modalContainer__body__lbl"> مدل کالا :</label>
              <Input
                type="text"
                holder="مدل کالا را وارد کنید "
                className="modal"
                validate={{
                  ...register("model", {
                    required: "وارد کردن مدل کالا الزامی ست",
                    // minLength: 3,
                  }),
                }}
              />
              {errors.model && <p className="error">{errors.model.message}</p>}
            </div>
          </div>

          <div className="flex j-sb">
            <div
              className="modalContainer__body__categoryProduct flex col gap-1"
              style={{ width: "13rem" }}
            >
              <label className="modalContainer__body__lbl"> دسته بندی : </label>
              <select
                className="modalContainer__body__categoryProduct__select"
                name="category"
                {...register("category", {
                  required: "یکی از گزیینه ها را انتخاب کنید",
                })}
              >
                <option value="">همه</option>
                <option value="1">موبایل</option>
                <option value="2">لپ تاپ </option>
                <option value="3">هدفون و هندزفری</option>
                <option value="4">کنسول بازی </option>
              </select>
              {errors.category && (
                <p className="error">{errors.category.message}</p>
              )}
            </div>
            <div
              className="modalContainer__body__categoryProduct flex col gap-1"
              style={{ width: "13rem" }}
            >
              <label className="modalContainer__body__lbl"> سابکتوری : </label>
              <select
                className="modalContainer__body__categoryProduct__select"
                name="subcategory"
                {...register("subcategory", {
                  required: "یکی از گزیینه ها را انتخاب کنید",
                })}
              >
                <option value="">همه</option>
                <option value="1">A series</option>
                <option value="2">IdeaPad series</option>
                <option value="3"> F9 series </option>
                <option value="4"> SERIES X </option>
              </select>
              {errors.subcategory && (
                <p className="error">{errors.subcategory.message}</p>
              )}
            </div>
            <div
              className="modalContainer__body__nameProduct flex col gap-1"
              style={{ width: "13rem" }}
            >
              <label className="modalContainer__body__lbl"> قیمت کالا :</label>
              <Input
                type="text"
                holder="0 "
                className="modal"
                validate={{
                  ...register("price", {
                    required: "وارد کردن قیمت کالا الزامی ست",
                    // minLength: 3,
                  }),
                }}
              />
              {errors.price && <p className="error">{errors.price.message}</p>}
            </div>
            <div
              className="modalContainer__body__nameProduct flex col gap-1"
              style={{ width: "13rem" }}
            >
              <label className="modalContainer__body__lbl">
                {" "}
                موجودی کالا :
              </label>
              <Input
                type="number"
                holder=" 0 "
                className="modal"
                validate={{
                  ...register("quantity", {
                    required: "وارد کردن موجودی کالا الزامی ست",
                    // minLength: 3,
                  }),
                }}
              />
              {errors.quantity && (
                <p className="error">{errors.quantity.message}</p>
              )}
            </div>
          </div>
          <div className="modalContainer__body__descProduct flex col gap-1">
            <label className="modalContainer__body__lbl">توضیحات : </label>
            <textarea
              className="txtArea"
              rows="8"
              cols="50"
              placeholder="توضیحات خود را وارد نمایید "
              {...register("description", {
                required: "وارد کردن توضیحات الزامی است",
              })}
            ></textarea>
            {errors.description && (
              <p className="error">{errors.description.message}</p>
            )}
          </div>
        </div>
        <div className="modalContainer__footer">
          <Button type="modalBtn" size="full">
            ذخیره
          </Button>
        </div>
      </form>
    </div>
  );
};