import React from "react";
import "./img_galeria.css";
import { Card } from "react-bootstrap";
import { Modal, Carousel } from "react-bootstrap";
import { useState } from "react";

export default function Img_galeria({ products, windowWidth }) {
  const [show, setShow] = useState(false);
  const [selectImage, setSelectImage] = useState(0);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          {windowWidth < 1024 ? (
            <div>
              <Carousel className="container__carousel" fade={true} interval={null}>
                {product.images.map((image) => (
                  <div key={image.url}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image.url}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  </div>
                ))}
              </Carousel>
            </div>
          ) : (
            <div className="galeria_all">
              <div className="img_galeria_all" key={product.id}>
                <div className="img_galeria_grande_div">
                  <Card.Img
                    className="img_all_caract img_galeria_grande"
                    src={product.images[1]?.url}
                  />
                </div>
                <div className="img_galeria_col">
                  <div className="img_galeria_row">
                    <div className="img_all_padd">
                      <Card.Img
                        className="img_all_caract"
                        src={product.images[2]?.url}
                      />
                    </div>
                    <div className="img_all_padd">
                      <Card.Img
                        className="img_all_caract"
                        src={product.images[3]?.url}
                      />
                    </div>
                  </div>
                  <div className="img_galeria_row">
                    <div className="img_all_padd">
                      <Card.Img
                        className="img_all_caract"
                        src={product.images[4]?.url}
                      />
                    </div>
                    <div className="img_all_padd">
                      <div className="img_escrito_mais">
                        <>
                          <button
                            className="img_gal_button_mais"
                            onClick={() => setShow(true)}
                          >
                            Ver mais
                          </button>
                          <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-xl"
                            centered
                          >
                            <Modal.Body>
                            <Modal.Header closeButton></Modal.Header>
                              <Carousel fade={true} interval={null}>
                                {product.images.map((image) => (
                                  <Carousel.Item key={image.id} className={`${selectImage === image.id ? "active" : ""}`}>
                                    <img
                                      className="d-block w-100"
                                      src={image.url}
                                      alt="First slide"
                                    />
                                  </Carousel.Item>
                                ))}
                              </Carousel>
                              <div className="container_images_preview" >
                              {product.images.map((image) => (
                                  <div key={image.id} onClick={() => setSelectImage(image.id)}>
                                    <img
                                      className="d-block w-100"
                                      src={image.url}
                                      alt="First slide"
                                    />
                                  </div>
                                ))}
                              </div>
                            </Modal.Body>
                          </Modal>
                        </>
                      </div>
                      <Card.Img
                        className="img_all_caract"
                        src={product.images[5]?.url}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div key={product.id}>
            <div className="img_gal_descr_all">
              <div>
                <h3 className="img_gal_descr_titulo mb">{product.name}</h3>
              </div>
              <div className="img_gal_descr_sobre">
                <p className="img_gal_text">{product.description}</p>
              </div>
            </div>
            <div className="img_gal_descr_all">
              <div className="img_especif_tit">
                <h3 className="img_gal_descr_titulo">O que o carro oferece?</h3>
              </div>
              <div className="img_especif_all">
                {product.characteristics.map((charact) => (
                  <h6 className="img_gal_text" key={charact.name}>
                    <i className={charact.icon} aria-hidden="true"></i> {charact.name}: {charact.description}
                  </h6>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
