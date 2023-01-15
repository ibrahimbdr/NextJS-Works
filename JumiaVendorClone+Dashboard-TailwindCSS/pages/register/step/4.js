import React from 'react'
import { useRouter } from 'next/router';
import Router, { withRouter } from 'next/router'
import { forwardRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Footer from '../../../components/footer2';

const RegisterStep4 = () => {
    let item1={};
    let item2={};
    let item3={};
    const [idNumber, setIdNumber] = React.useState(1);
    const [idChar, setIdChar] = React.useState("A");
    const sellerId = "EG" + idNumber + idChar; 
    if (typeof window !== 'undefined') {
        console.log('You are on the browser')
            item1=JSON.parse(localStorage.getItem('Account Info'));
            item2=JSON.parse(localStorage.getItem('Business Info'));
            item3=JSON.parse(localStorage.getItem('Bank Account'));
      } else {
        console.log('You are on the server')
        // 👉️ can't use localStorage
      }
      const [defaultValues, setDefaultValues] = React.useState({sellerId, ...item1, ...item2, ...item3})
      console.log(defaultValues.type)
    
    const steps = {step1: item1, step2: item2, step3: item3}

    const router = useRouter();
  
    return (
        <div className='m-10'>
        <div className='p-3'>
            <img src="https://sellercenter.jumia.com.eg/templates/default/images/logo.png" alt="" />
        </div>
        <div className="bg-orange-500 mt-2 h-1"></div>
        <div>

        <h4 className='mt-4 text-2xl p-3'>Register and start selling today - create your own seller account</h4>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
        <div className='md:col-span-3 p-4 bg-gray-300'>
        <Formik
            initialValues={
            defaultValues
            }
            validationSchema= {validateSchema}
            onSubmit={ async (values) => {
                console.log(JSON.stringify(values));
                // window.alert(JSON.stringify(values));
                // localStorage.setItem('Bank Account', JSON.stringify(values));
                const res = await fetch("http://localhost:3030/seller", {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { "Content-Type": "application/json" }
        })

                const user = await res.json();
                if(res.of && user){
                Router.push({
                  pathname: '/register/step/5',
                  
      
              });
            }
              }}
            >
      {props=>(<form onSubmit={props.handleSubmit}>
     <h1 className='text-xl mb-2'>Summary</h1>
      <Accordion defaultPanel="panel-1">
        <AccordionItem toggle="panel-1" className="bg-gray-400 text-white">
          Seller Account Information
        </AccordionItem>
        <AccordionPanel id="panel-1">
        <Field
            dot={true}
            // error={props.touched?.shopName && props.errors?.shopName}
            label="Seller ID"
            name="sellerID"
            value={sellerId}
            onChange={props.handleChange}
            type="text"
            />
        <Field
            dot={true}
            error={props.touched?.shopName && props.errors?.shopName}
            label="Shop Name"
            name="shopName"
            value={props.values.shopName}
            onChange={props.handleChange}
            type="text"
            />
            <Field
          dot={true}
          error={props.touched?.email && props.errors?.email}
          label="Email Address"
          name="email"
          value={props.values.email}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={props.touched?.type && props.errors?.type}
          label="Please select if you're an Individual or Business Entity/Company"
          name="type"
          value={props.values.type}
          onChange={props.handleChange}
          type="select"
        >
            <option>-Choose an option-</option>
            <option value="Business Entity/Company">Business Entity/Company</option>
            <option value="Individual">Individual</option>
            {/* {defaultValues.type=="Business Entity/Company" ? <option value="Business Entity/Company" selected>Business Entity/Company</option> : <option value="Business Entity/Company">Business Entity/Company</option>}
            {defaultValues.type=="Individual" ? <option value="Individual" selected>Individual</option> : <option value="Individual">Individual</option>} */}
        </Field>
        <Field
            dot={true}
            error={props.touched?.accountManager && props.errors?.accountManager}
            label="Account Manager First and Last Name"
            name="accountManager"
            value={props.values.accountManager}
            onChange={props.handleChange}
            type="text"
            />
        <Field
            dot={true}
            error={props.touched?.accountManagerPhone && props.errors?.accountManagerPhone}
            label="Account manager phone number"
            name="accountManagerPhone"
            value={props.values.accountManagerPhone}
            onChange={props.handleChange}
            type="text"
            />
        <Field
            dot={false}
            error={props.errors?.accountManagerPhone2}
            label="Additional phone number"
            name="accountManagerPhone2"
            value={props.values.accountManagerPhone2}
            onChange={props.handleChange}
            type="text"
            />
        

        </AccordionPanel>
        <AccordionItem toggle="panel-2" className="bg-gray-400 text-white">
          Bussiness Information
        </AccordionItem>
        <AccordionPanel id="panel-2">
        <Field
            dot={false}
            error={props.errors?.referredBy}
            label="Referred by (email of referrer)"
            name="referredBy"
            value={props.values.referredBy}
            onChange={props.handleChange}
            type="text"
            />
        <Field
          dot={false}
          error={props.errors?.existShops}
          label="Do you already have a shop/several shops on Tag?"
          name="existShops"
          value={props.values.existShops}
          onChange={props.handleChange}
          type="select"
        >
            <option>-Choose an option-</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            {/* {defaultValues.existShops == "Yes" ? <option value="Yes" selected>Yes</option> : <option value="Yes">Yes</option> }
            {defaultValues.existShops == "No" ? <option value="No" selected>No</option> : <option value="No">No</option> } */}
        </Field>
        <Field
            dot={false}
            error={props.errors?.existShopsNames}
            label="If yes, why would you like to open a new shop on Jumia?"
            name="existShopsNames"
            value={props.values.existShopsNames}
            onChange={props.handleChange}
            type="text"
            />
        <Field
            dot={false}
            error={props.errors?.existShopsReason}
            label="If yes, why would you like to open a new shop on Jumia?"
            name="existShopsReason"
            value={props.values.existShopsReason}
            onChange={props.handleChange}
            type="text"
            />
        <Field
          dot={false}
          error={props.errors?.companyRegisteredName}
          label="Company registered name"
          name="companyRegisteredName"
          value={props.values.companyRegisteredName}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
          error={props.errors?.Address1}
          label="Address 1"
          name="Address1"
          value={props.values.Address1}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
          error={props.errors?.Address2}
          label="Address 2"
          name="Address2"
          value={props.values.Address2}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
          error={props.errors?.postalCode}
          label="Postal code / ZIP code"
          name="postalCode"
          value={props.values.postalCode}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={props.touched?.city && props.errors?.city}
          label="City / Town"
          name="city"
          value={props.values.city}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
          error={props.errors?.country}
          label="Country"
          name="country"
          value={props.values.country}
          onChange={props.handleChange}
          type="select"
        >
            <option>-Choose an option-</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'ivoire">Cote D'ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">French Southern Territories</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-bissau">Guinea-bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Italy</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-leste">Timor-leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">Virgin Islands, British</option>
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
            {/* { defaultValues.country == "Egypt" ? <option value="Egypt" selected>Egypt</option> : <option value="Egypt">Egypt</option> }
            { defaultValues.country == "Afghanistan" ? <option value="Afghanistan" selected>Afghanistan</option> : <option value="Afghanistan">Afghanistan</option> }
            { defaultValues.country == "Åland Islands" ? <option value="Åland Islands" selected>Åland Islands</option> : <option value="Åland Islands">Åland Islands</option> }
            { defaultValues.country == "Albania" ? <option value="Albania" selected>Albania</option> : <option value="Albania">Albania</option> }
            { defaultValues.country == "Algeria" ? <option value="Algeria" selected>Algeria</option> : <option value="Algeria">Algeria</option> }
            { defaultValues.country == "American Samoa" ? <option value="American Samoa" selected>American Samoa</option> : <option value="American Samoa">American Samoa</option> }
            { defaultValues.country == "Andorra" ? <option value="Andorra" selected>Andorra</option> : <option value="Andorra">Andorra</option> }
            { defaultValues.country == "Angola" ? <option value="Angola" selected>Angola</option> : <option value="Angola">Angola</option> }
            { defaultValues.country == "Anguilla" ? <option value="Anguilla" selected>Anguilla</option> : <option value="Anguilla">Anguilla</option> }
            { defaultValues.country == "Antarctica" ? <option value="Antarctica" selected>Antarctica</option> : <option value="Antarctica">Antarctica</option> }
            { defaultValues.country == "Antigua and Barbuda" ? <option value="Antigua and Barbuda" selected>Antigua and Barbuda</option> : <option value="Antigua and Barbuda">Antigua and Barbuda</option> }
            { defaultValues.country == "Argentina" ? <option value="Argentina" selected>Argentina</option> : <option value="Argentina">Argentina</option> }
            { defaultValues.country == "Armenia" ? <option value="Armenia" selected>Armenia</option> : <option value="Armenia">Armenia</option> }
            { defaultValues.country == "Aruba" ? <option value="Aruba" selected>Aruba</option> : <option value="Aruba">Aruba</option> }
            { defaultValues.country == "Australia" ? <option value="Australia" selected>Australia</option> : <option value="Australia">Australia</option> }
            { defaultValues.country == "Austria" ? <option value="Austria" selected>Austria</option> : <option value="Austria">Austria</option> }
            { defaultValues.country == "Azerbaijan" ? <option value="Azerbaijan" selected>Azerbaijan</option> : <option value="Azerbaijan">Azerbaijan</option> }
            { defaultValues.country == "Bahamas" ? <option value="Bahamas" selected>Bahamas</option> : <option value="Bahamas">Bahamas</option> }
            { defaultValues.country == "Bahrain" ? <option value="Bahrain" selected>Bahrain</option> : <option value="Bahrain">Bahrain</option> }
            { defaultValues.country == "Bangladesh" ? <option value="Bangladesh" selected>Bangladesh</option> : <option value="Bangladesh">Bangladesh</option> }
            { defaultValues.country == "Barbados" ? <option value="Barbados" selected>Barbados</option> : <option value="Barbados">Barbados</option> }
            { defaultValues.country == "Belarus" ? <option value="Belarus" selected>Belarus</option> : <option value="Belarus">Belarus</option> }
            { defaultValues.country == "Belgium" ? <option value="Belgium" selected>Belgium</option> : <option value="Belgium">Belgium</option> }
            { defaultValues.country == "Belize" ? <option value="Belize" selected>Belize</option> : <option value="Belize">Belize</option> }
            { defaultValues.country == "Benin" ? <option value="Benin" selected>Benin</option> : <option value="Benin">Benin</option> }
            { defaultValues.country == "Bermuda" ? <option value="Bermuda" selected>Bermuda</option> : <option value="Bermuda">Bermuda</option> }
            { defaultValues.country == "Bhutan" ? <option value="Bhutan" selected>Bhutan</option> : <option value="Bhutan">Bhutan</option> }
            { defaultValues.country == "Bolivia" ? <option value="Bolivia" selected>Bolivia</option> : <option value="Bolivia">Bolivia</option> }
            { defaultValues.country == "Bosnia and Herzegovina" ? <option value="Bosnia and Herzegovina" selected>Bosnia and Herzegovina</option> : <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> }
            { defaultValues.country == "Botswana" ? <option value="Botswana" selected>Botswana</option> : <option value="Botswana">Botswana</option> }
            { defaultValues.country == "Bouvet Island" ? <option value="Bouvet Island" selected>Bouvet Island</option> : <option value="Bouvet Island">Bouvet Island</option> }
            { defaultValues.country == "Brazil" ? <option value="Brazil" selected>Brazil</option> : <option value="Brazil">Brazil</option> }
            { defaultValues.country == "British Indian Ocean Territory" ? <option value="British Indian Ocean Territory" selected>British Indian Ocean Territory</option> : <option value="British Indian Ocean Territory">British Indian Ocean Territory</option> }
            { defaultValues.country == "Brunei Darussalam" ? <option value="Brunei Darussalam" selected>Brunei Darussalam</option> : <option value="Brunei Darussalam">Brunei Darussalam</option> }
            { defaultValues.country == "Bulgaria" ? <option value="Bulgaria" selected>Bulgaria</option> : <option value="Bulgaria">Bulgaria</option> }
            { defaultValues.country == "Burkina Faso" ? <option value="Burkina Faso" selected>Burkina Faso</option> : <option value="Burkina Faso">Burkina Faso</option> }
            { defaultValues.country == "Burundi" ? <option value="Burundi" selected>Burundi</option> : <option value="Burundi">Burundi</option> }
            { defaultValues.country == "Cambodia" ? <option value="Cambodia" selected>Cambodia</option> : <option value="Cambodia">Cambodia</option> }
            { defaultValues.country == "Cameroon" ? <option value="Cameroon" selected>Cameroon</option> : <option value="Cameroon">Cameroon</option> }
            { defaultValues.country == "Canada" ? <option value="Canada" selected>Canada</option> : <option value="Canada">Canada</option> }
            { defaultValues.country == "Cape Verde" ? <option value="Cape Verde" selected>Cape Verde</option> : <option value="Cape Verde">Cape Verde</option> }
            { defaultValues.country == "Cayman Islands" ? <option value="Cayman Islands" selected>Cayman Islands</option> : <option value="Cayman Islands">Cayman Islands</option> }
            { defaultValues.country == "Central African Republic" ? <option value="Central African Republic" selected>Central African Republic</option> : <option value="Central African Republic">Central African Republic</option> }
            { defaultValues.country == "Chad" ? <option value="Chad" selected>Chad</option> : <option value="Chad">Chad</option> }
            { defaultValues.country == "Chile" ? <option value="Chile" selected>Chile</option> : <option value="Chile">Chile</option> }
            { defaultValues.country == "China" ? <option value="China" selected>China</option> : <option value="China">China</option> }
            { defaultValues.country == "Christmas Island" ? <option value="Christmas Island" selected>Christmas Island</option> : <option value="Christmas Island">Christmas Island</option> }
            { defaultValues.country == "Cocos (Keeling) Islands" ? <option value="Cocos (Keeling) Islands" selected>Cocos (Keeling) Islands</option> : <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> }
            { defaultValues.country == "Colombia" ? <option value="Colombia" selected>Colombia</option> : <option value="Colombia">Colombia</option> }
            { defaultValues.country == "Comoros" ? <option value="Comoros" selected>Comoros</option> : <option value="Comoros">Comoros</option> }
            { defaultValues.country == "Congo" ? <option value="Congo" selected>Congo</option> : <option value="Congo">Congo</option> }
            { defaultValues.country == "Congo, The Democratic Republic of The" ? <option value="Congo, The Democratic Republic of The" selected>Congo, The Democratic Republic of The</option> : <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> }
            { defaultValues.country == "Cook Islands" ? <option value="Cook Islands" selected>Cook Islands</option> : <option value="Cook Islands">Cook Islands</option> }
            { defaultValues.country == "Costa Rica" ? <option value="Costa Rica" selected>Costa Rica</option> : <option value="Costa Rica">Costa Rica</option> }
            { defaultValues.country == "Cote D'ivoire" ? <option value="Cote D'ivoire" selected>Cote D'ivoire</option> : <option value="Cote D'ivoire">Cote D'ivoire</option> }
            { defaultValues.country == "Croatia" ? <option value="Croatia" selected>Croatia</option> : <option value="Croatia">Croatia</option> }
            { defaultValues.country == "Cuba" ? <option value="Cuba" selected>Cuba</option> : <option value="Cuba">Cuba</option> }
            { defaultValues.country == "Cyprus" ? <option value="Cyprus" selected>Cyprus</option> : <option value="Cyprus">Cyprus</option> }
            { defaultValues.country == "Czech Republic" ? <option value="Czech Republic" selected>Czech Republic</option> : <option value="Czech Republic">Czech Republic</option> }
            { defaultValues.country == "Denmark" ? <option value="Denmark" selected>Denmark</option> : <option value="Denmark">Denmark</option> }
            { defaultValues.country == "Djibouti" ? <option value="Djibouti">Djibouti</option> : <option value="Djibouti">Djibouti</option> }
            { defaultValues.country == "Dominica" ? <option value="Dominica" selected>Dominica</option> : <option value="Dominica">Dominica</option> }
            { defaultValues.country == "Dominican Republic" ? <option value="Dominican Republic" selected>Dominican Republic</option> : <option value="Dominican Republic">Dominican Republic</option> }
            { defaultValues.country == "Ecuador" ? <option value="Ecuador" selected>Ecuador</option> : <option value="Ecuador">Ecuador</option> }
            { defaultValues.country == "El Salvador" ? <option value="El Salvador" selected>El Salvador</option> : <option value="El Salvador">El Salvador</option> }
            { defaultValues.country == "Equatorial Guinea" ? <option value="Equatorial Guinea" selected>Equatorial Guinea</option> : <option value="Equatorial Guinea">Equatorial Guinea</option> }
            { defaultValues.country == "Eritrea" ? <option value="Eritrea" selected>Eritrea</option> : <option value="Eritrea">Eritrea</option> }
            { defaultValues.country == "Estonia" ? <option value="Estonia" selected>Estonia</option> : <option value="Estonia">Estonia</option> }
            { defaultValues.country == "Ethiopia" ? <option value="Ethiopia" selected>Ethiopia</option> : <option value="Ethiopia">Ethiopia</option> }
            { defaultValues.country == "Falkland Islands (Malvinas)" ? <option value="Falkland Islands (Malvinas)" selected>Falkland Islands (Malvinas)</option> : <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> }
            { defaultValues.country == "Faroe Islands" ? <option value="Faroe Islands" selected>Faroe Islands</option> : <option value="Faroe Islands">Faroe Islands</option> }
            { defaultValues.country == "Fiji" ? <option value="Fiji" selected>Fiji</option> : <option value="Fiji">Fiji</option> }
            { defaultValues.country == "Finland" ? <option value="Finland" selected>Finland</option> : <option value="Finland">Finland</option> }
            { defaultValues.country == "France" ? <option value="France" selected>France</option> : <option value="France">France</option> }
            { defaultValues.country == "French Guiana" ? <option value="French Guiana" selected>French Guiana</option> : <option value="French Guiana">French Guiana</option> }
            { defaultValues.country == "French Polynesia" ? <option value="French Polynesia" selected>French Polynesia</option> : <option value="French Polynesia">French Polynesia</option> }
            { defaultValues.country == "French Southern Territories" ? <option value="French Southern Territories" selected>French Southern Territories</option> : <option value="French Southern Territories">French Southern Territories</option> }
            { defaultValues.country == "Gabon" ? <option value="Gabon" selected>Gabon</option> : <option value="Gabon">Gabon</option> }
            { defaultValues.country == "Gambia" ? <option value="Gambia" selected>Gambia</option> : <option value="Gambia">Gambia</option> }
            { defaultValues.country == "Georgia" ? <option value="Georgia" selected>Georgia</option> : <option value="Georgia">Georgia</option> }
            { defaultValues.country == "Germany" ? <option value="Germany" selected>Germany</option> : <option value="Germany">Germany</option> }
            { defaultValues.country == "Ghana" ? <option value="Ghana" selected>Ghana</option> : <option value="Ghana">Ghana</option> }
            { defaultValues.country == "Gibraltar" ? <option value="Gibraltar" selected>Gibraltar</option> : <option value="Gibraltar">Gibraltar</option> }
            { defaultValues.country == "Greece" ? <option value="Greece" selected>Greece</option> : <option value="Greece">Greece</option> }
            { defaultValues.country == "Greenland" ? <option value="Greenland" selected>Greenland</option> : <option value="Greenland">Greenland</option> }
            { defaultValues.country == "Grenada" ? <option value="Grenada" selected>Grenada</option> : <option value="Grenada">Grenada</option> }
            { defaultValues.country == "Guadeloupe" ? <option value="Guadeloupe" selected>Guadeloupe</option> : <option value="Guadeloupe">Guadeloupe</option> }
            { defaultValues.country == "Guam" ? <option value="Guam" selected>Guam</option> : <option value="Guam">Guam</option> }
            { defaultValues.country == "Guatemala" ? <option value="Guatemala" selected>Guatemala</option> : <option value="Guatemala">Guatemala</option> }
            { defaultValues.country == "Guernsey" ? <option value="Guernsey" selected>Guernsey</option> : <option value="Guernsey">Guernsey</option> }
            { defaultValues.country == "Guinea" ? <option value="Guinea" selected>Guinea</option> : <option value="Guinea">Guinea</option> }
            { defaultValues.country == "Guinea-bissau" ? <option value="Guinea-bissau" selected>Guinea-bissau</option> : <option value="Guinea-bissau">Guinea-bissau</option> }
            { defaultValues.country == "Guyana" ? <option value="Guyana" selected>Guyana</option> : <option value="Guyana">Guyana</option> }
            { defaultValues.country == "Haiti" ? <option value="Haiti" selected>Haiti</option> : <option value="Haiti">Haiti</option> }
            { defaultValues.country == "Heard Island and Mcdonald Islands" ? <option value="Heard Island and Mcdonald Islands" selected>Heard Island and Mcdonald Islands</option> : <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option> }
            { defaultValues.country == "Holy See (Vatican City State)" ? <option value="Holy See (Vatican City State)" selected>Holy See (Vatican City State)</option> : <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> }
            { defaultValues.country == "Honduras" ? <option value="Honduras" selected>Honduras</option> : <option value="Honduras">Honduras</option> }
            { defaultValues.country == "Hong Kong" ? <option value="Hong Kong" selected>Hong Kong</option> : <option value="Hong Kong">Hong Kong</option> }
            { defaultValues.country == "Hungary" ? <option value="Hungary" selected>Hungary</option> : <option value="Hungary">Hungary</option> }
            { defaultValues.country == "Iceland" ? <option value="Iceland" selected>Iceland</option> : <option value="Iceland">Iceland</option> }
            { defaultValues.country == "India" ? <option value="India" selected>India</option> : <option value="India">India</option> }
            { defaultValues.country == "Indonesia" ? <option value="Indonesia" selected>Indonesia</option> : <option value="Indonesia">Indonesia</option> }
            { defaultValues.country == "Iran, Islamic Republic of" ? <option value="Iran, Islamic Republic of" selected>Iran, Islamic Republic of</option> : <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> }
            { defaultValues.country == "Iraq" ? <option value="Iraq" selected>Iraq</option> : <option value="Iraq">Iraq</option> }
            { defaultValues.country == "Ireland" ? <option value="Ireland" selected>Ireland</option> : <option value="Ireland">Ireland</option> }
            { defaultValues.country == "Isle of Man" ? <option value="Isle of Man" selected>Isle of Man</option> : <option value="Isle of Man">Isle of Man</option> }
            { defaultValues.country == "Italy" ? <option value="Italy" selected>Italy</option> : <option value="Italy">Italy</option> }
            { defaultValues.country == "Jamaica" ? <option value="Jamaica" selected>Jamaica</option> : <option value="Jamaica">Jamaica</option> }
            { defaultValues.country == "Japan" ? <option value="Japan" selected>Japan</option> : <option value="Japan">Japan</option> }
            { defaultValues.country == "Jersey" ? <option value="Jersey" selected>Jersey</option> : <option value="Jersey">Jersey</option> }
            { defaultValues.country == "Jordan" ? <option value="Jordan" selected>Jordan</option> : <option value="Jordan">Jordan</option> }
            { defaultValues.country == "Kazakhstan" ? <option value="Kazakhstan" selected>Kazakhstan</option> : <option value="Kazakhstan">Kazakhstan</option> }
            { defaultValues.country == "Kenya" ? <option value="Kenya" selected>Kenya</option> : <option value="Kenya">Kenya</option> }
            { defaultValues.country == "Kiribati" ? <option value="Kiribati" selected>Kiribati</option> : <option value="Kiribati">Kiribati</option> }
            { defaultValues.country == "Korea, Democratic People's Republic of" ? <option value="Korea, Democratic People's Republic of" selected>Korea, Democratic People's Republic of</option> : <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option> }
            { defaultValues.country == "Korea, Republic of" ? <option value="Korea, Republic of" selected>Korea, Republic of</option> : <option value="Korea, Republic of">Korea, Republic of</option> }
            { defaultValues.country == "Kuwait" ? <option value="Kuwait" selected>Kuwait</option> : <option value="Kuwait">Kuwait</option> }
            { defaultValues.country == "Kyrgyzstan" ? <option value="Kyrgyzstan" selected>Kyrgyzstan</option> : <option value="Kyrgyzstan">Kyrgyzstan</option> }
            { defaultValues.country == "Lao People's Democratic Republic" ? <option value="Lao People's Democratic Republic" selected>Lao People's Democratic Republic</option> : <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option> }
            { defaultValues.country == "Latvia" ? <option value="Latvia" selected>Latvia</option> : <option value="Latvia">Latvia</option> }
            { defaultValues.country == "Lebanon" ? <option value="Lebanon" selected>Lebanon</option> : <option value="Lebanon">Lebanon</option> }
            { defaultValues.country == "Lesotho" ? <option value="Lesotho" selected>Lesotho</option> : <option value="Lesotho">Lesotho</option> }
            { defaultValues.country == "Liberia" ? <option value="Liberia" selected>Liberia</option> : <option value="Liberia">Liberia</option> }
            { defaultValues.country == "Libyan Arab Jamahiriya" ? <option value="Libyan Arab Jamahiriya" selected>Libyan Arab Jamahiriya</option> : <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> }
            { defaultValues.country == "Liechtenstein" ? <option value="Liechtenstein" selected>Liechtenstein</option> : <option value="Liechtenstein">Liechtenstein</option> }
            { defaultValues.country == "Lithuania" ? <option value="Lithuania" selected>Lithuania</option> : <option value="Lithuania">Lithuania</option> }
            { defaultValues.country == "Luxembourg" ? <option value="Luxembourg" selected>Luxembourg</option> : <option value="Luxembourg">Luxembourg</option> }
            { defaultValues.country == "Macao" ? <option value="Macao" selected>Macao</option> : <option value="Macao">Macao</option> }
            { defaultValues.country == "Macedonia, The Former Yugoslav Republic of" ? <option value="Macedonia, The Former Yugoslav Republic of" selected>Macedonia, The Former Yugoslav Republic of</option> : <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option> }
            { defaultValues.country == "Madagascar" ? <option value="Madagascar" selected>Madagascar</option> : <option value="Madagascar">Madagascar</option> }
            { defaultValues.country == "Malawi" ? <option value="Malawi" selected>Malawi</option> : <option value="Malawi">Malawi</option> }
            { defaultValues.country == "Malaysia" ? <option value="Malaysia" selected>Malaysia</option> : <option value="Malaysia">Malaysia</option> }
            { defaultValues.country == "Maldives" ? <option value="Maldives" selected>Maldives</option> : <option value="Maldives">Maldives</option> }
            { defaultValues.country == "Mali" ? <option value="Mali" selected>Mali</option> : <option value="Mali">Mali</option> }
            { defaultValues.country == "Malta" ? <option value="Malta" selected>Malta</option> : <option value="Malta">Malta</option> }
            { defaultValues.country == "Marshall Islands" ? <option value="Marshall Islands" selected>Marshall Islands</option> : <option value="Marshall Islands">Marshall Islands</option> }
            { defaultValues.country == "Martinique" ? <option value="Martinique" selected>Martinique</option> : <option value="Martinique">Martinique</option> }
            { defaultValues.country == "Mauritania" ? <option value="Mauritania" selected>Mauritania</option> : <option value="Mauritania">Mauritania</option> }
            { defaultValues.country == "Mauritius" ? <option value="Mauritius" selected>Mauritius</option> : <option value="Mauritius">Mauritius</option> }
            { defaultValues.country == "Mayotte" ? <option value="Mayotte" selected>Mayotte</option> : <option value="Mayotte">Mayotte</option> }
            { defaultValues.country == "Mexico" ? <option value="Mexico" selected>Mexico</option> : <option value="Mexico">Mexico</option> }
            { defaultValues.country == "Micronesia, Federated States of" ? <option value="Micronesia, Federated States of" selected>Micronesia, Federated States of</option> : <option value="Micronesia, Federated States of">Micronesia, Federated States of</option> }
            { defaultValues.country == "Moldova, Republic of" ? <option value="Moldova, Republic of" selected>Moldova, Republic of</option> : <option value="Moldova, Republic of">Moldova, Republic of</option> }
            { defaultValues.country == "Monaco" ? <option value="Monaco" selected>Monaco</option> : <option value="Monaco">Monaco</option> }
            { defaultValues.country == "Mongolia" ? <option value="Mongolia" selected>Mongolia</option> : <option value="Mongolia">Mongolia</option> }
            { defaultValues.country == "Montenegro" ? <option value="Montenegro" selected>Montenegro</option> : <option value="Montenegro">Montenegro</option> }
            { defaultValues.country == "Montserrat" ? <option value="Montserrat" selected>Montserrat</option> : <option value="Montserrat">Montserrat</option> }
            { defaultValues.country == "Morocco" ? <option value="Morocco" selected>Morocco</option> : <option value="Morocco">Morocco</option> }
            { defaultValues.country == "Mozambique" ? <option value="Mozambique" selected>Mozambique</option> : <option value="Mozambique">Mozambique</option> }
            { defaultValues.country == "Myanmar" ? <option value="Myanmar" selected>Myanmar</option> : <option value="Myanmar">Myanmar</option> }
            { defaultValues.country == "Namibia" ? <option value="Namibia" selected>Namibia</option> : <option value="Namibia">Namibia</option> }
            { defaultValues.country == "Nauru" ? <option value="Nauru" selected>Nauru</option> : <option value="Nauru">Nauru</option> }
            { defaultValues.country == "Nepal" ? <option value="Nepal" selected>Nepal</option> : <option value="Nepal">Nepal</option> }
            { defaultValues.country == "Netherlands" ? <option value="Netherlands" selected>Netherlands</option> : <option value="Netherlands">Netherlands</option> }
            { defaultValues.country == "Netherlands Antilles" ? <option value="Netherlands Antilles" selected>Netherlands Antilles</option> : <option value="Netherlands Antilles">Netherlands Antilles</option> }
            { defaultValues.country == "New Caledonia" ? <option value="New Caledonia" selected>New Caledonia</option> : <option value="New Caledonia">New Caledonia</option> }
            { defaultValues.country == "New Zealand" ? <option value="New Zealand" selected>New Zealand</option> : <option value="New Zealand">New Zealand</option> }
            { defaultValues.country == "Nicaragua" ? <option value="Nicaragua" selected>Nicaragua</option> : <option value="Nicaragua">Nicaragua</option> }
            { defaultValues.country == "Niger" ? <option value="Niger" selected>Niger</option> : <option value="Niger">Niger</option> }
            { defaultValues.country == "Nigeria" ? <option value="Nigeria" selected>Nigeria</option> : <option value="Nigeria">Nigeria</option> }
            { defaultValues.country == "Niue" ? <option value="Niue" selected>Niue</option> : <option value="Niue">Niue</option> }
            { defaultValues.country == "Norfolk Island" ? <option value="Norfolk Island" selected>Norfolk Island</option> : <option value="Norfolk Island">Norfolk Island</option> }
            { defaultValues.country == "Northern Mariana Islands" ? <option value="Northern Mariana Islands" selected>Northern Mariana Islands</option> : <option value="Northern Mariana Islands">Northern Mariana Islands</option> }
            { defaultValues.country == "Norway" ? <option value="Norway" selected>Norway</option> : <option value="Norway">Norway</option> }
            { defaultValues.country == "Oman" ? <option value="Oman" selected>Oman</option> : <option value="Oman">Oman</option> }
            { defaultValues.country == "Pakistan" ? <option value="Pakistan" selected>Pakistan</option> : <option value="Pakistan">Pakistan</option> }
            { defaultValues.country == "Palau" ? <option value="Palau" selected>Palau</option> : <option value="Palau">Palau</option> }
            { defaultValues.country == "Palestinian Territory, Occupied" ? <option value="Palestinian Territory, Occupied" selected>Palestinian Territory, Occupied</option> : <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> }
            { defaultValues.country == "Panama" ? <option value="Panama" selected>Panama</option> : <option value="Panama">Panama</option> }
            { defaultValues.country == "Papua New Guinea" ? <option value="Papua New Guinea" selected>Papua New Guinea</option> : <option value="Papua New Guinea">Papua New Guinea</option> }
            { defaultValues.country == "Paraguay" ? <option value="Paraguay" selected>Paraguay</option> : <option value="Paraguay">Paraguay</option> }
            { defaultValues.country == "Peru" ? <option value="Peru" selected>Peru</option> : <option value="Peru">Peru</option> }
            { defaultValues.country == "Philippines" ? <option value="Philippines" selected>Philippines</option> : <option value="Philippines">Philippines</option> }
            { defaultValues.country == "Pitcairn" ? <option value="Pitcairn" selected>Pitcairn</option> : <option value="Pitcairn">Pitcairn</option> }
            { defaultValues.country == "Poland" ? <option value="Poland" selected>Poland</option> : <option value="Poland">Poland</option> }
            { defaultValues.country == "Portugal" ? <option value="Portugal" selected>Portugal</option> : <option value="Portugal">Portugal</option> }
            { defaultValues.country == "Puerto Rico" ? <option value="Puerto Rico" selected>Puerto Rico</option> : <option value="Puerto Rico">Puerto Rico</option> }
            { defaultValues.country == "Qatar" ? <option value="Qatar" selected>Qatar</option> : <option value="Qatar">Qatar</option> }
            { defaultValues.country == "Reunion" ? <option value="Reunion" selected>Reunion</option> : <option value="Reunion">Reunion</option> }
            { defaultValues.country == "Romania" ? <option value="Romania" selected>Romania</option> : <option value="Romania">Romania</option> }
            { defaultValues.country == "Russian Federation" ? <option value="Russian Federation">Russian Federation</option> : <option value="Russian Federation">Russian Federation</option> }
            { defaultValues.country == "Rwanda" ? <option value="Rwanda" selected>Rwanda</option> : <option value="Rwanda">Rwanda</option> }
            { defaultValues.country == "Saint Helena" ? <option value="Saint Helena" selected>Saint Helena</option> : <option value="Saint Helena">Saint Helena</option> }
            { defaultValues.country == "Saint Kitts and Nevis" ? <option value="Saint Kitts and Nevis" selected>Saint Kitts and Nevis</option> : <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> }
            { defaultValues.country == "Saint Lucia" ? <option value="Saint Lucia" selected>Saint Lucia</option> : <option value="Saint Lucia">Saint Lucia</option> }
            { defaultValues.country == "Saint Pierre and Miquelon" ? <option value="Saint Pierre and Miquelon" selected>Saint Pierre and Miquelon</option> : <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> }
            { defaultValues.country == "Saint Vincent and The Grenadines" ? <option value="Saint Vincent and The Grenadines" selected>Saint Vincent and The Grenadines</option> : <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> }
            { defaultValues.country == "Samoa" ? <option value="Samoa" selected>Samoa</option> : <option value="Samoa">Samoa</option> }
            { defaultValues.country == "San Marino" ? <option value="San Marino" selected>San Marino</option> : <option value="San Marino">San Marino</option> }
            { defaultValues.country == "Sao Tome and Principe" ? <option value="Sao Tome and Principe" selected>Sao Tome and Principe</option> : <option value="Sao Tome and Principe">Sao Tome and Principe</option> }
            { defaultValues.country == "Saudi Arabia" ? <option value="Saudi Arabia" selected>Saudi Arabia</option> : <option value="Saudi Arabia">Saudi Arabia</option> }
            { defaultValues.country == "Senegal" ? <option value="Senegal" selected>Senegal</option> : <option value="Senegal">Senegal</option> }
            { defaultValues.country == "Serbia" ? <option value="Serbia" selected>Serbia</option> : <option value="Serbia">Serbia</option> }
            { defaultValues.country == "Seychelles" ? <option value="Seychelles" selected>Seychelles</option> : <option value="Seychelles">Seychelles</option> }
            { defaultValues.country == "Sierra Leone" ? <option value="Sierra Leone" selected>Sierra Leone</option> : <option value="Sierra Leone">Sierra Leone</option> }
            { defaultValues.country == "Singapore" ? <option value="Singapore" selected>Singapore</option> : <option value="Singapore">Singapore</option> }
            { defaultValues.country == "Slovakia" ? <option value="Slovakia" selected>Slovakia</option> : <option value="Slovakia">Slovakia</option> }
            { defaultValues.country == "Slovenia" ? <option value="Slovenia" selected>Slovenia</option> : <option value="Slovenia">Slovenia</option> }
            { defaultValues.country == "Solomon Islands" ? <option value="Solomon Islands" selected>Solomon Islands</option> : <option value="Solomon Islands">Solomon Islands</option> }
            { defaultValues.country == "Somalia" ? <option value="Somalia" selected>Somalia</option> : <option value="Somalia">Somalia</option> }
            { defaultValues.country == "South Africa" ? <option value="South Africa" selected>South Africa</option> : <option value="South Africa">South Africa</option> }
            { defaultValues.country == "South Georgia and The South Sandwich Islands" ? <option value="South Georgia and The South Sandwich Islands" selected>South Georgia and The South Sandwich Islands</option> : <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option> }
            { defaultValues.country == "Spain" ? <option value="Spain" selected>Spain</option> : <option value="Spain">Spain</option> }
            { defaultValues.country == "Sri Lanka" ? <option value="Sri Lanka" selected>Sri Lanka</option> : <option value="Sri Lanka">Sri Lanka</option> }
            { defaultValues.country == "Sudan" ? <option value="Sudan" selected>Sudan</option> : <option value="Sudan">Sudan</option> }
            { defaultValues.country == "Suriname" ? <option value="Suriname" selected>Suriname</option> : <option value="Suriname">Suriname</option> }
            { defaultValues.country == "Svalbard and Jan Mayen" ? <option value="Svalbard and Jan Mayen" selected>Svalbard and Jan Mayen</option> : <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> }
            { defaultValues.country == "Swaziland" ? <option value="Swaziland" selected>Swaziland</option> : <option value="Swaziland">Swaziland</option> }
            { defaultValues.country == "Sweden" ? <option value="Sweden" selected>Sweden</option> : <option value="Sweden">Sweden</option> }
            { defaultValues.country == "Switzerland" ? <option value="Switzerland" selected>Switzerland</option> : <option value="Switzerland">Switzerland</option> }
            { defaultValues.country == "Syrian Arab Republic" ? <option value="Syrian Arab Republic" selected>Syrian Arab Republic</option> : <option value="Syrian Arab Republic">Syrian Arab Republic</option> }
            { defaultValues.country == "Taiwan" ? <option value="Taiwan" selected>Taiwan</option> : <option value="Taiwan">Taiwan</option> }
            { defaultValues.country == "Tajikistan" ? <option value="Tajikistan" selected>Tajikistan</option> : <option value="Tajikistan">Tajikistan</option> }
            { defaultValues.country == "Tanzania, United Republic of" ? <option value="Tanzania, United Republic of" selected>Tanzania, United Republic of</option> : <option value="Tanzania, United Republic of">Tanzania, United Republic of</option> }
            { defaultValues.country == "Thailand" ? <option value="Thailand" selected>Thailand</option> : <option value="Thailand">Thailand</option> }
            { defaultValues.country == "Timor-leste" ? <option value="Timor-leste" selected>Timor-leste</option> : <option value="Timor-leste">Timor-leste</option> }
            { defaultValues.country == "Togo" ? <option value="Togo" selected>Togo</option> : <option value="Togo">Togo</option> }
            { defaultValues.country == "Tokelau" ? <option value="Tokelau" selected>Tokelau</option> : <option value="Tokelau">Tokelau</option> }
            { defaultValues.country == "Tonga" ? <option value="Tonga" selected>Tonga</option> : <option value="Tonga">Tonga</option> }
            { defaultValues.country == "Trinidad and Tobago" ? <option value="Trinidad and Tobago" selected>Trinidad and Tobago</option> : <option value="Trinidad and Tobago">Trinidad and Tobago</option> }
            { defaultValues.country == "Tunisia" ? <option value="Tunisia" selected>Tunisia</option> : <option value="Tunisia">Tunisia</option> }
            { defaultValues.country == "Turkey" ? <option value="Turkey" selected>Turkey</option> : <option value="Turkey">Turkey</option> }
            { defaultValues.country == "Turkmenistan" ? <option value="Turkmenistan" selected>Turkmenistan</option> : <option value="Turkmenistan">Turkmenistan</option> }
            { defaultValues.country == "Turks and Caicos Islands" ? <option value="Turks and Caicos Islands" selected>Turks and Caicos Islands</option> : <option value="Turks and Caicos Islands">Turks and Caicos Islands</option> }
            { defaultValues.country == "Tuvalu" ? <option value="Tuvalu" selected>Tuvalu</option> : <option value="Tuvalu">Tuvalu</option> }
            { defaultValues.country == "Uganda" ? <option value="Uganda" selected>Uganda</option> : <option value="Uganda">Uganda</option> }
            { defaultValues.country == "Ukraine" ? <option value="Ukraine" selected>Ukraine</option> : <option value="Ukraine">Ukraine</option> }
            { defaultValues.country == "United Arab Emirates" ? <option value="United Arab Emirates" selected>United Arab Emirates</option> : <option value="United Arab Emirates">United Arab Emirates</option> }
            { defaultValues.country == "United Kingdom" ? <option value="United Kingdom" selected>United Kingdom</option> : <option value="United Kingdom">United Kingdom</option> }
            { defaultValues.country == "United States" ? <option value="United States" selected>United States</option> : <option value="United States">United States</option> }
            { defaultValues.country == "United States Minor Outlying Islands" ? <option value="United States Minor Outlying Islands" selected>United States Minor Outlying Islands</option> : <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> }
            { defaultValues.country == "Uruguay" ? <option value="Uruguay" selected>Uruguay</option> : <option value="Uruguay">Uruguay</option> }
            { defaultValues.country == "Uzbekistan" ? <option value="Uzbekistan" selected>Uzbekistan</option> : <option value="Uzbekistan">Uzbekistan</option> }
            { defaultValues.country == "Vanuatu" ? <option value="Vanuatu" selected>Vanuatu</option> : <option value="Vanuatu">Vanuatu</option> }
            { defaultValues.country == "Venezuela" ? <option value="Venezuela" selected>Venezuela</option> : <option value="Venezuela">Venezuela</option> }
            { defaultValues.country == "Viet Nam" ? <option value="Viet Nam" selected>Viet Nam</option> : <option value="Viet Nam">Viet Nam</option> }
            { defaultValues.country == "Virgin Islands, British" ? <option value="Virgin Islands, British" selected>Virgin Islands, British</option> : <option value="Virgin Islands, British">Virgin Islands, British</option> }
            { defaultValues.country == "Virgin Islands, U.S." ? <option value="Virgin Islands, U.S." selected>Virgin Islands, U.S.</option> : <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> }
            { defaultValues.country == "Wallis and Futuna" ? <option value="Wallis and Futuna" selected>Wallis and Futuna</option> : <option value="Wallis and Futuna">Wallis and Futuna</option> }
            { defaultValues.country == "Western Sahara" ? <option value="Western Sahara" selected>Western Sahara</option> : <option value="Western Sahara">Western Sahara</option> }
            { defaultValues.country == "Yemen" ? <option value="Yemen" selected>Yemen</option> : <option value="Yemen">Yemen</option> }
            { defaultValues.country == "Zambia" ? <option value="Zambia" selected>Zambia</option> : <option value="Zambia">Zambia</option> }
            { defaultValues.country == "Zimbabwe" ? <option value="Zimbabwe" selected>Zimbabwe</option> : <option value="Zimbabwe">Zimbabwe</option> } */}
        </Field>
        <Field
          dot={false}
          error={props.errors?.bussinessOwnerFN}
          label="Business owner or legal representative first name"
          name="bussinessOwnerFN"
          value={props.values.bussinessOwnerFN}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
          error={props.errors?.bussinessOwnerMN}
          label="Business owner or legal representative middle name"
          name="bussinessOwnerMN"
          value={props.values.bussinessOwnerMN}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
          error={props.errors?.bussinessOwnerLN}
          label="Business owner or legal representative last name"
          name="bussinessOwnerLN"
          value={props.values.bussinessOwnerLN}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
          error={props.errors?.bussinessOwnerBirth}
          label="Business owner or legal representative date of birth"
          name="bussinessOwnerBirth"
          value={props.values.bussinessOwnerBirth}
          onChange={props.handleChange}
          type="date"
        />
        <Field
          dot={false}
          error={props.errors?.bussinessOwnerIDType}
          label="Business owner or legal representative ID type"
          name="bussinessOwnerIDType"
          value={props.values.bussinessOwnerIDType}
          onChange={props.handleChange}
          type="select"
        >
            <option>-Choose an option-</option>
            <option value="Passport">Passport</option>
            <option value="Military">Military ID</option>
            <option value="National ID">National ID</option>
        </Field>
        <Field
          dot={false}
          error={props.errors?.IDNumber}
          label="Business owner or legal representative ID number"
          name="IDNumber"
          value={props.values.IDNumber}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
          // error={props.errors?.IDCopy}
          label="Upload a copy of the ID card or passport of the business owner or legal representative"
          name="IDCopy"
          value={props.values.IDCopy}
          onChange={props.handleChange}
          type="file"
        />
        <Field
          dot={false}
          error={props.errors?.employeesNumbers}
          label="If you're a Business Entity/Company, select the number of employees you have"
          name="employeesNumbers"
          value={props.values.employeesNumbers}
          onChange={props.handleChange}
          type="select"
        >
            <option>-Choose an option-</option>
            <option value="1 - 3">1 - 3</option>
            <option value="4 - 10">4 - 10</option>
            <option value="11 - 99">11 - 99</option>
            <option value="100 and more">100 and more</option>
        </Field>
        <Field
          dot={false}
          error={props.errors?.commercialNumber}
          label="Commercial Registration Number"
          name="commercialRegisterNumber"
          value={props.values.commercialRegisterNumber}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
          // error={props.errors?.commercialRegisterCopy}
          label="Upload a copy of your Commercial Register"
          name="commercialRegisterCopy"
          value={props.values.commercialRegisterCopy}
          onChange={props.handleChange}
          type="file"
        />
        <Field
          dot={false}
          error={props.errors?.taxID}
          label="Tax ID"
          name="taxID"
          value={props.values.taxID}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
          // error={props.errors?.TaxIDCopy}
          label="Upload a copy of the Tax Card"
          name="TaxIDCopy"
          value={props.values.taxIDCopy}
          onChange={props.handleChange}
          type="file"
        />
        <Field
          dot={false}
          error={props.errors?.VATRegistrationNumber}
          label="If yes, what is your VAT registration number ?"
          name="VATRegistrationNumber"
          value={props.values.VATRegistrationNumber}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
          error={props.errors?.VATRegistrationCopy}
          label="Upload a copy of VAT registration certificate"
          name="VATRegistrationCopy"
          value={props.values.VATRegistrationCopy}
          onChange={props.handleChange}
          type="file"
        />
        <Field
          dot={true}
          error={props.touched?.shippingCountry && props.errors?.shippingCountry}
          label="Which country will you shipping from"
          name="shippingCountry"
          value={props.values.shippingCountry}
          onChange={props.handleChange}
          type="select"
        >
            <option>-Select an Answer-</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'ivoire">Cote D'ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">French Southern Territories</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-bissau">Guinea-bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Italy</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-leste">Timor-leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">Virgin Islands, British</option>
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
        </Field>
        </AccordionPanel>
        <AccordionItem toggle="panel-3" className="bg-gray-400 text-white">
          Bank Account
        </AccordionItem>
        <AccordionPanel id="panel-3">
        <Field
          dot={false}
          error={props.errors?.bankName}
          label="Bank name list"
          name="bankName"
          value={props.values.bankName}
          onChange={props.handleChange}
          type="select"
        >
            <option>-Choose an option-</option>
            <option value="NBE">NBE - National Bank of Egypt</option>
            <option value="CIB">CIB - Commercial International Bank</option>
            <option value="QNB">QNB - Qatar National Bank Alahli</option>
            <option value="MISR">MISR - Banque Misr</option>
            <option value="AAIB">AAIB - Arab African International Bank</option>
            <option value="BDC">BDC - Banque Du Caire</option>
            <option value="CAE">CAE - Credit Agricole Egypt</option>
            <option value="BOA">BOA - Bank of Alexandria</option>
            <option value="HSBC">HSBC - HSBC</option>
            <option value="FAIB">FAIB - Faisal Islamic Bank of Egypt</option>
            <option value="AUB">AUB - Ahly United Bank</option>
            <option value="AUDI">AUDI - Audi Bank</option>
            <option value="ABC">ABC - Arab Banking Corporation</option>
            <option value="ABK">ABK - Al Ahli Bank of Kuwait - Egypt</option>
            <option value="ABRK">ABRK - Al Baraka Bank Egypt</option>
            <option value="ADIB">ADIB - Abu Dhabi Islamic Bank – Egypt</option>
            <option value="AIB">AIB - Arab Investment Bank</option>
            <option value="ARAB">ARAB - Arab Bank</option>
            <option value="BBE">BBE - Attijariwafa Bank Egypt S.A.E</option>
            <option value="BLOM">BLOM - Blom Bank Egypt</option>
            <option value="CITI">CITI - Citibank</option>
            <option value="EALB">EALB - Egyptian Arab Land Bank</option>
            <option value="EDBE">EDBE - Export Development Bank of Egypt</option>
            <option value="EGB">EGB - Egyptian Gulf Bank</option>
            <option value="ENBD">ENBD - Emirates National Bank of Dubai</option>
            <option value="FAB">FAB - First Abu Dhabi Bank</option>
            <option value="HDB">HDB - Housing And Development Bank</option>
            <option value="IDB">IDB - Industrial Development Bank</option>
            <option value="MASH">MASH - Mashreq Bank</option>
            <option value="MIDB">MIDB - Misr Iran Development Bank</option>
            <option value="NBG">NBG - National Bank of Greece</option>
            <option value="NBK">NBK - National Bank Of Kuwait – Egypt</option>
            <option value="NSB">NSB - Nasser Social Bank</option>
            <option value="PDAC">PDAC - The Principal Bank for Development and Agri.</option>
            <option value="SAIB">SAIB - Societe Arabe Internationale De Banque</option>
            <option value="SCB">SCB - Suez Canal Bank</option>
            <option value="UB">UB - The United Bank</option>
            <option value="UNB">UNB - Union National Bank</option>
            <option value="ARIB">ARIB - Arab International Bank</option>
            <option value="CBE">CBE - Central Bank Of Egypt</option>
        </Field>
        <Field
            dot={false}
            error={props.errors?.bank}
            label="Bank"
            name="bank"
            value={props.values.bank}
            onChange={props.handleChange}
            type="text"
            />
        <Field
            dot={false}
            error={props.errors?.bankCode}
            label="Bank Code"
            name="bankCode"
            value={props.values.bankCode}
            onChange={props.handleChange}
            type="text"
            />
        <Field
            dot={false}
            error={props.errors?.accountName}
            label="Account Name"
            name="accountName"
            value={props.values.accountName}
            onChange={props.handleChange}
            type="text"
            />
        <Field
            dot={true}
            error={props.errors?.accountNumber}
            label="Account Number"
            name="accountNumber"
            value={props.values.accountNumber}
            onChange={props.handleChange}
            type="text"
            />
        <Field
          dot={false}
          error={props.errors?.SWIFT}
          label="SWIFT"
          name="SWIFT"
          value={props.values.SWIFT}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={false}
        //   error={props.errors?.SWIFTpdf}
          name="SWIFTpdf"
          value={props.values.SWIFTpdf}
          onChange={props.handleChange}
          type="file"
        />
        <Field
          dot={false}
          error={props.errors?.IBAN}
          label="IBAN"
          name="IBAN"
          value={props.values.IBAN}
          onChange={props.handleChange}
          type="text"
        />
        <Field
          dot={true}
          error={props.errors?.paybalAccount}
          label="Paybal Account"
          name="paybalAccount"
          value={props.values.paybalAccount}
          onChange={props.handleChange}
          type="text"
        />
        </AccordionPanel>
      </Accordion>
      
      <button
          className="mt-8 bg-black active:bg-gray-900 focus:outline-none text-white rounded px-4 py-1"
          type="submit" 
          // onClick={()=>goStep2()}
        >
          Submit Final
        </button>
      </form>)}
      </Formik>
      </div>
      <div className='md:col-span-1 p-4 bg-gray-300 h-fit'>
          <h3>FAQ</h3>
        </div>
      </div>
        </div>
        <div className="bg-gray-400 mt-5 h-1"></div>
        <Footer/>
        </div>
    );
  };
  
  /* Logic */
  
  const Context = React.createContext({});
  
  function Accordion({ children, defaultPanel }) {
    const [selected, setSelected] = React.useState(defaultPanel || '');
  
    const toggleItem = React.useCallback(
      (id) => () => {
        setSelected((prevState) => (prevState !== id ? id : ''));
      },
      [],
    );
    return (
      <Context.Provider value={{ selected, toggleItem }}>
        {children}
      </Context.Provider>
    );
  }
  
  //custom hook to consume all accordion values
  const useAccordion = () => React.useContext(Context);
  
  const style = {
    item: `block focus:outline-none border-b my-2 p-3`,
    panel: `overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600`,
    dot: `after:content-['*'] after:ml-0.5 after:text-red-500`,
    error: `ring-red-500 ring-1`,
    disabled: `cursor-not-allowed`,
    container: `relative mb-6 mt-3`,
    errorMessage: `text-sm text-red-500 mt-2`,
    checkboxLabel: `block overflow-hidden h-6 rounded-full bg-gray-300`,
    checkboxContainer: `relative w-10 mr-2 align-middle select-none mt-2`,
    iconContainer: `absolute flex border border-transparent left-0 top-0 h-full w-10`,
    icon: `flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-400 text-lg h-full w-full`,
    checkbox: `checked:bg-blue-500 checked:right-0 focus:outline-none right-4 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`,
    default: `text-base relative flex flex-1 w-full mt-1 rounded-md py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:border-transparent border`,
  };
  
  function AccordionItem({ toggle, children, className }) {
    const { selected, toggleItem } = useAccordion();
    return (
      <div
        role="button"
        onClick={toggleItem(toggle)}
        className={`${style.item} ${className}`}
      >
        {children}
        <span className="float-right">
          {selected === toggle ? <AngleUpIcon /> : <AngleDownIcon />}
        </span>
      </div>
    );
  }
  
  function AccordionPanel({ children, id }) {
    const { selected } = useAccordion();
    const ref = React.useRef();
    const inlineStyle =
      selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };
  
    return (
      <div ref={ref} id={id} className={style.panel} style={inlineStyle}>
        {children}
      </div>
    );
  }
  
  const AngleUpIcon = () => (
    <svg
      fill="white"
      strokeWidth="0"
      viewBox="0 0 320 512"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1 h-4"
    >
      <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
    </svg>
  );
  
  const AngleDownIcon = () => (
    <svg
      stroke="currentColor"
      fill="white"
      strokeWidth="0"
      viewBox="0 0 320 512"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1 h-4"
    >
      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
    </svg>
  );

// Yup validation schema
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validateSchema = Yup.object().shape({
    shopName: Yup.string().required("Value is required and can't be empty"),
    type: Yup.string().required("Value is required and can't be empty"),
    accountManager: Yup.string().required("Value is required and can't be empty"),
    accountManagerPhone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Value is required and can't be empty"),
    accountManagerPhone2: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().email('Invalid email').required("Value is required and can't be empty"),
    password: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required("Value is required and can't be empty"),
    referredBy: Yup.string().email('Invalid email'),
    existShops: Yup.string(),
    existShopsNames: Yup.string(),
    existShopsReason: Yup.string(),
    companyRegisteredName: Yup.string(),
    Address1: Yup.string(),
    Address2: Yup.string(),
    postalCode: Yup.string()
        .length(5)
        .matches(/^[0-9]{5}/),
    city: Yup.string().required("Value is required and can't be empty"),
    country: Yup.string(),
    bussinessOwnerFN: Yup.string(),
    bussinessOwnerMN: Yup.string(),
    bussinessOwnerLN: Yup.string(),
    bussinessOwnerBirth: Yup.date(),
    bussinessOwnerIDType: Yup.string(),
    IDNumber: Yup.string(),
    employeesNumbers: Yup.string(),
    commercialRegisterNumber: Yup.string(),
    taxID: Yup.string(),
    VATRegistrationNumber: Yup.string(),
    shippingCountry: Yup.string().required("Value is required and can't be empty"),
    bankName: Yup.string(),
    bank: Yup.string(),
    bankCode: Yup.string(),
    accountName: Yup.string(),
    accountNumber: Yup.string().required("Value is required and can't be empty"),
    SWIFT: Yup.string(),
    IBAN: Yup.string(),
    paybalAccount: Yup.string().required("Value is required and can't be empty"),
});

/*  COMPONENT LOGIC */

// const style = {
//   dot: `after:content-['*'] after:ml-0.5 after:text-red-500`,
//   error: `ring-red-500 ring-1`,
//   disabled: `cursor-not-allowed`,
//   container: `relative mb-6 mt-3`,
//   errorMessage: `text-sm text-red-500 mt-2`,
//   checkboxLabel: `block overflow-hidden h-6 rounded-full bg-gray-300`,
//   checkboxContainer: `relative w-10 mr-2 align-middle select-none mt-2`,
//   iconContainer: `absolute flex border border-transparent left-0 top-0 h-full w-10`,
//   icon: `flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-400 text-lg h-full w-full`,
//   checkbox: `checked:bg-blue-500 checked:right-0 focus:outline-none right-4 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`,
//   default: `text-base relative flex flex-1 w-full mt-1 rounded-md py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:border-transparent border`,
// };

const Field = forwardRef(
  (
    { disabled, dot, error, icon, label, name, type = 'text', ...rest },
    ref,
  ) => {
    let component;

    // if you won't use select, you can delete this part
    if (type === 'select') {
      component = (
        <select
          aria-required={dot}
          aria-invalid={!!error}
          className={`${style.default} ${disabled ? style.disabled : ''}
             ${error ? style.error : 'border-gray-300'}
          `}
          disabled={disabled}
          id={name}
          name={name}
          ref={ref}
          {...rest}
        />
      );
    }

    // if you won't use textarea, you can delete this part
    if (type === 'textarea') {
      component = (
        <textarea
          aria-required={dot}
          aria-invalid={!!error}
          className={`${style.default} ${disabled ? style.disabled : ''}
             ${error ? style.error : 'border-gray-300'}
          `}
          disabled={disabled}
          id={name}
          name={name}
          ref={ref}
          {...rest}
        />
      );
    }

    // if you won't use checkbox, you can delete this part and the classes checkbox, checkboxContainer and checkboxLabel
    if (type === 'checkbox') {
      component = (
        <div className={style.checkboxContainer}>
          <input
            aria-required={dot}
            aria-invalid={!!error}
            className={`${style.checkbox} ${disabled ? style.disabled : ''}`}
            disabled={disabled}
            id={name}
            name={name}
            type="checkbox"
            {...rest}
          />
          <span className={style.checkboxLabel} />
        </div>
      );
    }

    // if you won't use input, you can delete this part
    if (type !== 'checkbox' && type !== 'select' && type !== 'textarea') {
      component = (
        <div className="relative">
          <div className={style.iconContainer}>
            <div className={style.icon}>{icon}</div>
          </div>
          <input
            aria-required={dot}
            aria-invalid={!!error}
            className={`${style.default} ${icon ? 'pl-12' : ''}
               ${error ? style.error : 'border-gray-300'}
               ${disabled ? style.disabled : ''}
            `}
            disabled={disabled}
            id={name}
            name={name}
            type={type}
            ref={ref}
            {...rest}
          />
          {error && <ErrorIcon />}
        </div>
      );
    }

    return (
      <div className={`${style.container} ${disabled ? 'opacity-50' : ''}`}>
        <label htmlFor={name} className={`text-gray-700 ${dot && style.dot}`}>
          {label}
        </label>
        {component}
        {error && (
          <span role="alert" className={style.errorMessage}>
            {error}
          </span>
        )}
      </div>
    );
  },
);

Field.displayName = 'Field';

const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="currentColor"
    className="absolute right-2 -mt-7 text-red-500"
    viewBox="0 0 1792 1792"
  >
    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
  </svg>
);

const LockIcon = () => (
  <svg
    height="20"
    width="20"
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
  </svg>
);
export default RegisterStep4