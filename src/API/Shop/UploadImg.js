import { HttpService } from "Services/HttpService";

export const UploadImgService = (data) => {
  const formDataImg = data.map((item) => {
    const fDataImg = new FormData();
    fDataImg.append("img", item);
    return fDataImg;
  });

  let allPromises = [];

  for (const formdata of formDataImg) {
    allPromises.push(
      HttpService.post("/upload", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
    );
  }

  return Promise.all(allPromises);
};
