import React, { useState } from "react";
import "./admin.css";

import { AdvancedVideo } from "@cloudinary/react";
import { AdvancedImage } from "@cloudinary/react";

import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const Admin = () => {
  const [file, setFile] = useState(null);
  const [videoSrc, setVideoSrc] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [transformState, setTransformState] = useState({
    width: 60,
    height: 60,
  });
  const [cldCloudName, setCldCloudName] = useState("");

  const [loading, setLoading] = useState(false);
  const [preset, setPreset] = useState("");

  const handleCloudName = (e) => {
    setCldCloudName(e.target.value);
  };
  const handlePresetName = (e) => {
    setPreset(e.target.value);
  };

  const onChange = (e) => {
    setTransformState({
      ...transformState,
      [e.target.name]: e.target.value,
    });
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: "pueneh",
    },
  });

  const handleEventChange = (e) => {
    const read = e.target.files[0];
    setFile(read);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);
    setLoading(true);
    fetch(`https://api.cloudinary.com/v1_1/${cldCloudName}/upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((res) => {
        console.log(res);
        setVideoSrc(res.secure_url);
        // setVideoSrc(res.public_id);
        setImageSrc(res.public_id);
        setTransformState((prev) => ({
          ...prev,
          height: res.height,
          width: res.width,
        }));

        setLoading(false);
      })
      .then(handleErrors);
  };

  return (
    <div className={"header-banner"}>
      <div className={"banner-content-wrapper"}>
        <div className={"user-img-wrapper"}>
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut
            enim blandit volutpat maecenas volutpat. Viverra nibh cras pulvinar
            mattis nunc sed blandit libero volutpat. Sed viverra tellus in hac.
            Maecenas volutpat blandit aliquam etiam erat. At lectus urna duis
            convallis. Semper risus in hendrerit gravida rutrum quisque non
            tellus orci. Purus sit amet luctus venenatis lectus magna fringilla
            urna porttitor. Ornare arcu odio ut sem. Eu turpis egestas pretium
            aenean pharetra. Molestie ac feugiat sed lectus vestibulum mattis
            ullamcorper velit. Ullamcorper eget nulla facilisi etiam dignissim
            diam quis enim lobortis. Eget sit amet tellus cras adipiscing.
            Suspendisse ultrices gravida dictum fusce ut. Enim facilisis gravida
            neque convallis a cras semper. Integer quis auctor elit sed
            vulputate mi sit amet. Posuere morbi leo urna molestie at elementum
            eu. Lobortis elementum nibh tellus molestie nunc non blandit massa
            enim. Proin sagittis nisl rhoncus mattis rhoncus. Amet risus nullam
            eget felis. In mollis nunc sed id. Massa vitae tortor condimentum
            lacinia quis vel. Ornare aenean euismod elementum nisi quis
            eleifend. Proin nibh nisl condimentum id venenatis a condimentum
            vitae. Nisi vitae suscipit tellus mauris a. Ac feugiat sed lectus
            vestibulum. Donec pretium vulputate sapien nec sagittis. Ipsum dolor
            sit amet consectetur adipiscing. In fermentum et sollicitudin ac.
            {/* Eget dolor morbi non arcu risus quis varius quam quisque.  */}
          </p>
          {/* <button onClick={() => myVideo}>Transform</button> */}
        </div>
      </div>
    </div>
  );
};
export default Admin;
