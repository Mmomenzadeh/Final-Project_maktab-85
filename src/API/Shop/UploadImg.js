import { HttpService } from "Services/HttpService";

export const UploadImg = async (img) => {
  let formData = new FormData();
  formData.append("image", img);

  const res = await HttpService.post("/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log(res.data);
  return res.data.filename ;
};




  // const uploadImg = async (img) => {
  //   let formData = new FormData();
  //   formData.append("image", img);
  //   const res = await axios.post("http://localhost:3002/upload", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     },
  //   });
  //   console.log(res);
  //   return {data : res.data.filename};
  // };