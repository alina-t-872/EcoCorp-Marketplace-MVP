
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './ProductPage.css';
import cartIcon from '../../assets/cart.png';
import wishlistIcon from '../../assets/wishlist.png';
import ProductImagePreviewer from '../../fragments/ProductImagePreviewer';

const products = [
    {
      id: 1,
      title: 'Calculator hp compaq 8200 elite',
      name: 'Calculator hp compaq 8200 elite sff, intel pentium g850 2.90 ghz',
      price: 177.80,
      seller: 'IT EcoCorp PLUS SRL',
      description: 'Calculatorul HP Compaq 8200 ELITE SFF este o alegere solidă pentru nevoile tale de bază de calcul, oferind un echilibru între performanță și funcționalitate.',
      images: [
        'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics.jpg',
        'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics_5b8p-yr.jpg',
        'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics_knui-au.jpg',
        'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics_48u0-pv.jpg',
        'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics_bni2-nh.jpg'
      ],
      image: 'https://itvivantshop.net/images/detailed/95/Calculator-hp-compaq-8200-elite-sff--intel-pentium-g850-2-90-ghz---4gb-ddr3--500gb-hdd--dvd--intel-hd-graphics.jpg',
    },
    {
      id: 2,
      title: 'Monitor led philips 221v8',
      name: 'Monitor led philips 221v8, 21.5inch, va fhd, 4ms, 75hz, negru',
      price: 459.01 ,
      seller: 'IT EcoCorp PLUS SRL',
      description: 'Calculatorul HP Compaq 8200 ELITE SFF este o alegere solidă pentru nevoile tale de bază de calcul, oferind un echilibru între performanță și funcționalitate.',
      images: [
        'https://itvivantshop.net/images/detailed/63/Monitor-led-philips-221v8--21-5inch--va-fhd--4ms--75hz--negru_nke7-pp.jpg',
        'https://itvivantshop.net/images/detailed/63/Monitor-led-philips-221v8--21-5inch--va-fhd--4ms--75hz--negru_35si-o2.jpg',
        'https://itvivantshop.net/images/detailed/63/Monitor-led-philips-221v8--21-5inch--va-fhd--4ms--75hz--negru.jpg',      
        
      ],
      image: 'https://itvivantshop.net/images/detailed/63/Monitor-led-philips-221v8--21-5inch--va-fhd--4ms--75hz--negru_nke7-pp.jpg',
    },
    {
        id: 3,
        title: 'Laptop dell latitude 7280 12.5" fhd',
        name: 'Laptop dell latitude 7280 12.5" fhd, intel core i5-6300u 3.00ghz, 4gb ddr4, 128gb ssd, webcam, bluetooth, tastatura iluminata, intel hd graphics 520',
        price:1118.60,
        seller: 'IT EcoCorp PLUS SRL',
        description: 'aptopul DELL Latitude 7280 este compact, ușor de transportat și ideal pentru utilizatorii mobili care au nevoie de un dispozitiv puternic pentru activitățile de lucru. Cu caracteristici avansate și fiabilitate excelentă, acest laptop vă oferă libertatea de a lucra eficient în deplasare, indiferent unde vă aflați. Fie că sunteți într-o călătorie de afaceri sau lucrați de acasă, acest laptop este un partener de încredere pentru a vă ajuta să vă atingeți obiectivele profesionale.',
        images: [
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/9/29043/thumb600x600/2779374759/Laptop-dell-latitude-7280-12-5--fhd--intel-core-i5-6300u-3-00ghz--4gb-ddr4--128gb-ssd--webcam--bluetooth--tastatura-ilum.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/9/29043/thumb600x600/3869131606/Laptop-dell-latitude-7280-12-5--fhd--intel-core-i5-6300u-3-00ghz--4gb-ddr4--128gb-ssd--webcam--bluetooth--tastatura-ilum_w6lw-0d.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/9/29043/thumb600x600/1278205948/Laptop-dell-latitude-7280-12-5--fhd--intel-core-i5-6300u-3-00ghz--4gb-ddr4--128gb-ssd--webcam--bluetooth--tastatura-ilum_0lws-xc.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/9/29043/thumb600x600/242977049/Laptop-dell-latitude-7280-12-5--fhd--intel-core-i5-6300u-3-00ghz--4gb-ddr4--128gb-ssd--webcam--bluetooth--tastatura-ilum_vv5r-80.jpg'      
          
        ],
        image: 'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/9/29043/thumb600x600/2779374759/Laptop-dell-latitude-7280-12-5--fhd--intel-core-i5-6300u-3-00ghz--4gb-ddr4--128gb-ssd--webcam--bluetooth--tastatura-ilum.jpg',
    },
    {
        id: 4,
        title: 'Kit tastatura si mouse spacer spds-1691 cu fir',
        name: 'Kit tastatura si mouse spacer spds-1691 cu fir, usb, tastatura multimedia „spkb-169" + mouse optic „spmo-m11", black, „spds-1691"',
        price: 37.30 ,
        seller: 'IT EcoCorp PLUS SRL',
        description: 'KIT Tastatura si Mouse Spacer SPDS-1691 cu fir, USB, tastatura multimedia „SPKB-169" + mouse optic „SPMO-M11", black, „SPDS-1691"',
        images: [
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/1/9/19837/thumb600x600/3087620457/Kit-tastatura-si-mouse-spacer-spds-1691-cu-fir--usb--tastatura-multimedia----spkb-169----mouse-optic----spmo-m11---black-----spds-1691-_r4x5-st.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/1/9/19837/thumb600x600/1585118655/Kit-tastatura-si-mouse-spacer-spds-1691-cu-fir--usb--tastatura-multimedia----spkb-169----mouse-optic----spmo-m11---black-----spds-1691-_maxi-ul.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/1/9/19837/thumb600x600/590922468/Kit-tastatura-si-mouse-spacer-spds-1691-cu-fir--usb--tastatura-multimedia----spkb-169----mouse-optic----spmo-m11---black-----spds-1691-_33ta-dw.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/1/9/19837/thumb600x600/108818151/Kit-tastatura-si-mouse-spacer-spds-1691-cu-fir--usb--tastatura-multimedia----spkb-169----mouse-optic----spmo-m11---black-----spds-1691-_gion-l7.jpg'      
          
        ],
        image: 'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/1/9/19837/thumb600x600/3087620457/Kit-tastatura-si-mouse-spacer-spds-1691-cu-fir--usb--tastatura-multimedia----spkb-169----mouse-optic----spmo-m11---black-----spds-1691-_r4x5-st.jpg',
    },
    {
        id: 5,
        title: 'Monitor lg 24mp400p-b.beu 23.8 inch',
        name: 'Monitor lg 24mp400p-b.beu 23.8 inch, panel type: ips, resolution: 1920x1080, aspect ratio: 16:9',
        price: 512.27 ,
        seller: 'IT EcoCorp PLUS SRL',
        description: 'MONITOR LG 24MP400P-B.BEU 23.8 inch, Panel Type: IPS, Resolution: 1920x1080, Aspect Ratio: 16:9, Refresh Rate:75Hz, Response time GtG: 5ms ms, Brightness: 250 cd/m², Contrast (static): 600:1, Contrast (dynamic): 1000:1, Viewing angle: 178º(R/L), 178º(U/D), Color Gamut (NTSC/sRGB/Adobe RGB/DCI-P3): NTSC 72% (CIE1931), Colours: 16.7M, Adjustability: Tilt: -5~15º, Connectivity: D-SUB x1, HDMI x1, VESA: 75 x 75',
        images: [
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/5/25268/thumb600x600/70283680/Monitor-lg-24mp400p-b-beu-23-8-inch--panel-type--ips--resolution--1920x1080--aspect-ratio--16-9---refresh-rate-75hz--res.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/5/25268/thumb600x600/3779551334/Monitor-lg-24mp400p-b-beu-23-8-inch--panel-type--ips--resolution--1920x1080--aspect-ratio--16-9---refresh-rate-75hz--res_6ogr-mr.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/5/25268/thumb600x600/750976401/Monitor-lg-24mp400p-b-beu-23-8-inch--panel-type--ips--resolution--1920x1080--aspect-ratio--16-9---refresh-rate-75hz--res_1e7e-0q.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/5/25268/thumb600x600/1745517411/Monitor-lg-24mp400p-b-beu-23-8-inch--panel-type--ips--resolution--1920x1080--aspect-ratio--16-9---refresh-rate-75hz--res_u8kw-xb.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/5/25268/thumb600x600/3525485159/Monitor-lg-24mp400p-b-beu-23-8-inch--panel-type--ips--resolution--1920x1080--aspect-ratio--16-9---refresh-rate-75hz--res_e2dt-4x.jpg'      
          
        ],
        image: 'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/5/25268/thumb600x600/70283680/Monitor-lg-24mp400p-b-beu-23-8-inch--panel-type--ips--resolution--1920x1080--aspect-ratio--16-9---refresh-rate-75hz--res.jpg',
    },
    {
        id: 6,
        title: 'Server hp proliant dl385 g7 rackabil 2u',
        name: 'Server hp proliant dl385 g7 rackabil 2u, 2x amd opteron 12-cores 6172 3.20 ghz, 48gb ddr3, 2x 300gb sas hdd, 2x psu, hp smart array p410i',
        price: 1258.60,
        seller: 'IT EcoCorp PLUS SRL',
        description: 'Serverul HP ProLiant DL385 G7 Rackabil 2U oferă o combinație puternică de performanță, capacitate de stocare extinsă și fiabilitate, fiind o alegere excelentă pentru mediile de afaceri cu cerințe de prelucrare și stocare a datelor mari. Cu suportul tehnologic HP, acest server poate susține nevoile diverse ale infrastructurii IT și poate contribui la creșterea și succesul afacerii dumneavoastră. Indiferent de cerințele dvs., acest server vă oferă performanță și stabilitate pentru a susține operațiunile critice și a vă asigura că sunteți pregătiți pentru cerințele viitoare.',
        images: [
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/8/28862/thumb600x600/2945722986/Server-hp-proliant-dl385-g7-rackabil-2u--2x-amd-opteron-12-cores-6172-3-20-ghz--48gb-ddr3--2x-300gb-sas-hdd--2x-psu--hp-.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/8/28862/thumb600x600/4267683083/Server-hp-proliant-dl385-g7-rackabil-2u--2x-amd-opteron-12-cores-6172-3-20-ghz--48gb-ddr3--2x-300gb-sas-hdd--2x-psu--hp-_96dy-pc.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/8/28862/thumb600x600/1897300425/Server-hp-proliant-dl385-g7-rackabil-2u--2x-amd-opteron-12-cores-6172-3-20-ghz--48gb-ddr3--2x-300gb-sas-hdd--2x-psu--hp-_01az-pt.jpg',
          'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/8/28862/thumb600x600/3164955681/Server-hp-proliant-dl385-g7-rackabil-2u--2x-amd-opteron-12-cores-6172-3-20-ghz--48gb-ddr3--2x-300gb-sas-hdd--2x-psu--hp-_xnvd-9d.jpg',          
        ],
        image: 'https://itvivantshop.net/images/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/2/8/28862/thumb600x600/2945722986/Server-hp-proliant-dl385-g7-rackabil-2u--2x-amd-opteron-12-cores-6172-3-20-ghz--48gb-ddr3--2x-300gb-sas-hdd--2x-psu--hp-.jpg',
    
    },
];
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(products[id -1]);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    setProduct(products[id -1]);
  }, [id]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const initialPrice = product.price;
  const discountedPrice = Math.round(initialPrice * 0.85); 

  return (
    <div className="product-page-container">
       {product ? (
        <> <div>
             <ProductImagePreviewer
                productImages={product.images}
            />
          </div>

          <div className="information">
            <h2>{product.name}</h2>
            <p id="price">
              Pret:{' '}
              {quantity >= 3 ? (
                <>
                  <span className="discounted-price">{discountedPrice} RON</span>{' '}
                  <del className="original-price">{initialPrice} RON</del>
                </>
              ) : (
                `${initialPrice} RON`
              )}
            </p>
            <p style={{fontSize: "large"}}>Vanzator: {product.seller}</p>
            <p style={{fontSize: "large"}}>Descriere: {product.description}</p>
            <div className="quantity-container">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <div style={{ display: 'flex', paddingTop: "20px" }}>
                <Button onClick={() => {}} variant="primary" style={{ marginRight: '10px' }}>
                    <img src={cartIcon} alt=" " style={{height: "1.5rem", paddingRight: "10px"}} />
                    Add to Cart
                </Button>
                <Button onClick={() => {}} variant="secondary">
                    <img src={wishlistIcon}  style={{height: "1.5rem", paddingRight: "10px"}} alt=" " />
                    Wishlist
                </Button>
            </div>
            
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;