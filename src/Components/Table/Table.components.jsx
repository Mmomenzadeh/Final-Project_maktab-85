import { Button } from "Components";
import { BASE_URL } from "Config";
import "../../Assets/Styles/Components/Table/index.scss";
export const Table = ({data , status }) => {


  return (
    <>
    {
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
  
        {
          data.map(data => {
            return(
              <tr key={data.id} className="tbody__tr">
              <td style={{ width: "45rem" }} className="td-productName">
                <div className="td-productName__img-container ">
                  <img
                    className="td-productName__img"
                    src={`${BASE_URL}/files/${data.img[0]}`}
                    alt={data.name}
                  />
                </div>
                <div className="flex col gap-1">
                  <p className="td-productName__title">{data.name.length > 30 ? data.name.substring(0,35) + " ..." : data.name }</p>
                  <span className="td-productName__model">{data.model.length > 25 ? data.model.substring(0,25) +" ..." : data.model}</span>
                </div>
              </td>
    
              <td style={{ width: "35rem" }}>{data.category + " / " + data.subcategory + " / " + data.brand}</td>
              <td style={{ width: "10rem" }}><Button type="table-btn" outline="outline-blue">ویرایش</Button></td>
              <td style={{ width: "10rem" }}><Button type="table-btn" outline="outline-red">حذف</Button></td>
            </tr>
            )
  
          })
        }
  
      
  
    
  
        </tbody>
      </table>
    }
    </>
  );
};
