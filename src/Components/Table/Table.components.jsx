import { Button } from "Components";
import "../../Assets/Styles/Components/Table/index.scss";
export const Table = () => {
  return (
    <table>
      <thead>
       <tr className="thead__tr">
       <th>نام کالا</th>
        <th>دسته بندی </th>
        <th>ویرایش</th>
        <th>حذف</th>
       </tr>
      </thead>
      <tbody>

      

        <tr className="tbody__tr">
          <td style={{ width: "30rem" }} className="td-productName">
            <div className="td-productName__img-container ">
              <img
                className="td-productName__img"
                src="https://m.media-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg"
                alt=""
              />
            </div>
            <div className="flex col gap">
              <p className="td-productName__title">mobile A73 256G 8G ram</p>
              <span className="td-productName__model">samsung Galgsy A73</span>
            </div>
          </td>

          <td style={{ width: "30rem" }}>Germany /samsung Galgsy A73 </td>
          <td style={{ width: "10rem" }}><Button type="table-btn" outline="outline-blue">ویرایش</Button></td>
          <td style={{ width: "10rem" }}><Button type="table-btn" outline="outline-red">حذف</Button></td>
        </tr>


  

      </tbody>
    </table>
  );
};
