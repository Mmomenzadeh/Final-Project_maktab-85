import { Button, Table } from "Components";
import { CgCloseR } from "react-icons/cg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../../Assets/Styles/Components/Modal/index.scss";
export const OrderModal = ({ showOrderModal, setshowOrderModal }) => {
  const {ORDERDATA} = showOrderModal
  console.log(ORDERDATA);
  const deliveryBtn = () => {
    setshowOrderModal({ ...showOrderModal, status: false });
  };
  return (
    <div className="modal">
      <div className="background"></div>
      <div className="modalContainer">
        <di className="modalContainer__header">
          <p className="modalContainer__header__title">جزئیات سفارش</p>
          <CgCloseR
            onClick={() =>
              setshowOrderModal({ ...showOrderModal, status: false })
            }
            className="modalContainer__header__icon"
          />
        </di>
        <div className="line-h"></div>
        <div className="modalContainer__body">
          <div className="modalContainer__body__orderInfo">
            {/* name */}

            <div className="flex gap-1 a-c">
              <label className="modalContainer__body__orderInfo__lbl">
                {" "}
                تحویل گرینده :
              </label>
              <span>مهسا مومن زاده</span>
            </div>
            <div className="flex gap-1 a-c">
              <label className="modalContainer__body__orderInfo__lbl">
                {" "}
                شماره موبایل :
              </label>
              <span> 09178166087 </span>
            </div>
            {/* time */}

            <div className="flex gap-1 a-c">
              <label className="modalContainer__body__orderInfo__lbl">
                {" "}
                تاریخ ثبت سفارش :
              </label>
              <span> 01/02/1401 </span>
            </div>
            <div className="flex gap-1 a-c">
              <label className="modalContainer__body__orderInfo__lbl">
                {" "}
                زمان تحویل :
              </label>
              <span> 05/02/1401 </span>
            </div>

            <div className="flex gap-1 a-c">
              <label className="modalContainer__body__orderInfo__lbl">
                {" "}
                ادرس گرینده:
              </label>
              <span className="modalContainer__body__orderInfo__address">
                استان فارس / شیراز / شهرک صدرا / خیابان بیستون / ساختمان نیما
                استان فارس / شیراز /
              </span>
            </div>

            {/* table */}
            <div className="modalContainer__body__orderInfo__table">
              <Table className="modalTable">
                <thead className="modalTable__thead">
                  <tr className="modalTable__thead__tr">
                    <th className="modalTable__thead__tr__td">نام کالا</th>
                    <th className="modalTable__thead__tr__td"> قیمت </th>
                    <th className="modalTable__thead__tr__td">تعداد</th>
                  </tr>
                </thead>
                <tbody>
                  {ORDERDATA.map((data) => {
                    console.log(data);
                    return (
                      <tr key={data.id} className="modalTable__tbody__tr">
                        <td
                          style={{ width: "15rem" }}
                          className="modalTable__tbody__tr__td "
                        >
                          <Link
                            to={``}
                            className="link"
                            style={{ color: "#444" }}
                          >
                            {data.username + " " +  data.lastname}
                          </Link>
                        </td>

                        <td
                          style={{ width: "2rem" }}
                          className="modalTable__tbody__tr__td"
                        >
                          {data.prices}
                        </td>
                        <td
                          style={{ width: "2rem", paddingRight: "3rem" }}
                          className="modalTable__tbody__tr__td"
                        >
                          {data.products[0].count}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="modalContainer__footer">
          <Button type="modalBtn" size="full" onClick={deliveryBtn}>
            تحویل شد{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};
