const request = require("supertest");
const app = require("./index");

describe("upload", () => {
  it("upload", async () => {
    const response = await request(app)
      .post("/upload")
      .attach("file", `${__dirname}/test-file.mp4`)
      .set("Content-Type", "multipart/form-data");

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ message: "File uploaded" });
  });
});
