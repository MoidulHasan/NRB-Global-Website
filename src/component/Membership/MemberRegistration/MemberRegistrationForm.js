import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

import { Checkbox } from 'primereact/checkbox';

import { classNames } from 'primereact/utils';

import './MemberRegistrationForm.css';
import nrbLogo from '../../../assets/image/nrblogo.png';
import memberImg from '../../../assets/image/topmembers/img6.jpg';

const MemberRegistrationForm = (props) => {
  // const [countries, setCountries] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const org = props.memberType === 'Organization';
  console.log(org);

  const defaultValues = {
    name: '',
    email: '',
    phone: '',
    presentAddress: '',
    addressInBangladesh: '',
    otherContact: '',
    placeOfBirth: '',
    nationality: '',
    spouceOrChild: '',
    intro: '',
    payment: '',
    paymentFee: '',
    picture: {},
    birthday: null,
    category: props.memberType === 'Individual' ? 'Individual' : 'Organization',
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });
  // console.log(formData);

  const onSubmit = async (data) => {
    // setFormData({ formData, ...data });
    console.log(data.picture);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('presentAddress', data.presentAddress);
    formData.append('addressInBangladesh', data.addressInBangladesh);
    formData.append('otherContact', data.otherContact);
    formData.append('placeOfBirth', data.placeOfBirth);
    formData.append('nationality', data.nationality);
    formData.append('spouceOrChild', data.spouceOrChild);
    formData.append('intro', data.intro);
    formData.append('payment', data.payment);
    formData.append('paymentFee', data.paymentFee);
    formData.append('birthday', data.birthday);
    formData.append('category', data.category);
    formData.append('accept', data.accept);
    formData.append('phone', data.phone);
    formData.append("picture", data.picture[0], data.picture[0].name);


    Swal.fire({
      icon: 'warning',
      title: 'All of the information are correct?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {

        const requestOptions = {
          method: 'POST',
          body: formData
        };

        try {
          fetch("http://localhost:3001/api/register", requestOptions)
            .then(response => response.json())
            .then((data) => {
              console.log(data);
              if (data?.data?._id) {
                reset();
                setShowMessage(true);
                Swal.fire('Your Registration Form Submitted!', '', 'success');
              }
              else {
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Error!',
                  html: data?.message,
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch((err) => {
              console.log(err);
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error2!',
                html: err?.message,
                showConfirmButton: false,
                timer: 1500,
              });
            });
        } catch (err) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Failed!',
            html: err.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
    // reset();
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className='p-error'>{errors[name].message}</small>
    );
  };
  return (
    <div className='p-container my-4'>
      <div className='registrationContainer py-2 px-2'>
        <div className='grid'>
          <div className='col-12 md:col-4 order-2 md:order-1'>
            <div className='registrationInfo flex flex-column justify-content-between p-4 text-white'>
              <div>
                <img
                  src={nrbLogo}
                  alt='logo of NRB'
                  height='70px'
                  width='200px'
                  className='mb-2'
                />
                <div>
                  <h3 className='my-4 font-bold text-xl md:text-4xl'>
                    Start Your Journey With Us
                  </h3>
                  <span className='my-1 pr-1 md:pr-3 spanSupportText'>
                    Discover the country's best community of non residential
                    people.
                  </span>
                </div>
              </div>
              <div>
                <h3 className='my-4 font-bold text-xl md:text-4xl'>
                  Most Popular community among the non residents of Bangladesh.
                </h3>
                <span className='my-1 pr-1 md:pr-3 spanSupportText'>
                  NRb Global is one of the Bangladesh's largest non residential
                  community that provides a one-stop platform for students,
                  youth, businessmen, job holders to cope up in foreign, learn
                  new screen,network with peers, and grow as an individual.
                </span>
              </div>
              <div className='p-3 reviewKarim'>
                <span className=''>
                  Simply unbelievable I am really satisfied with my business and
                  communication. This Community is absolutely wonderful!
                </span>
                <div className='mt-3 flex align-items-center reviewMemberRegContainer'>
                  <img
                    src={memberImg}
                    alt=''
                    height='40px'
                    width='40px'
                    className='mr-2 regImageMember'
                  />
                  <div className='flex flex-column'>
                    <span className='reviewRegName'>Karim Miya</span>
                    <span className='reviewRegDesignation text-xs'>
                      Freelancer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 md:col-8 order-1 md:order-2'>
            <div className='registrationForm pl-0 md:pl-6 pr-1 md:pr-6 '>
              {/* <div className='flex'> */}
              <div className='card'>
                <h5 className='text-center md:text-2xl'>
                  Welcome to NRB Global
                </h5>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='p-fluid'
                  encType='multipart/form-data'
                >
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='category'
                        control={control}
                        render={({ field }) => (
                          <Dropdown
                            disabled
                            id={field.name}
                            value={field.value}
                            onChange={(e) => field.onChange(e.value)}
                            options={[
                              { name: 'Individual', value: 'Individual' },
                              { name: 'Organization', value: 'Organization' },
                            ]}
                            optionLabel='name'
                          />
                        )}
                      />
                      <label htmlFor='category'>Category</label>
                    </span>
                  </div>
                  <div className='field mb-3'>
                    <span className='p-float-label'>
                      <Controller
                        name='name'
                        control={control}
                        rules={{ required: 'Name is required.' }}
                        render={({ field, fieldState }) => (
                          <InputText
                            id={field.name}
                            {...field}
                            autoFocus
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                      <label
                        htmlFor='name'
                        className={classNames({ 'p-error': errors.name })}
                      >
                        {org ? 'Organization Name*' : 'Name*'}
                      </label>
                    </span>
                    {getFormErrorMessage('name')}
                  </div>
                  <div className='field mb-5'>
                    <span className='p-label p-input-icon-right'>
                      <i className='pi pi-pi-file' />
                      <label
                        htmlFor='picture'
                        className='block text-gray-600 mb-1 ml-2'
                      >
                        Picture*
                      </label>
                      <Controller
                        name='picture'
                        control={control}
                        rules={{
                          required: 'Photo is required.',
                        }}
                        render={({ field, fieldState }) => (
                          <input
                            type='file'
                            id={field.name}
                            {...field}
                            value={field.value.filename}
                            onChange={(e) => {
                              return field.onChange(e.target.files);
                            }}
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                    </span>
                    {getFormErrorMessage('picture')}
                  </div>
                  <div className='field mb-5'>
                    <span className='p-float-label p-input-icon-right'>
                      <i className='pi pi-envelope' />
                      <Controller
                        name='email'
                        control={control}
                        rules={{
                          required: 'Email is required.',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message:
                              'Invalid email address. E.g. example@email.com',
                          },
                        }}
                        render={({ field, fieldState }) => (
                          <InputText
                            id={field.name}
                            {...field}
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                      <label
                        htmlFor='email'
                        className={classNames({ 'p-error': !!errors.email })}
                      >
                        Email*
                      </label>
                    </span>
                    {getFormErrorMessage('email')}
                  </div>
                  <div className='field mb-5'>
                    <span className='p-float-label p-input-icon-right'>
                      <i className='pi pi-phone' />
                      <Controller
                        name='phone'
                        control={control}
                        rules={{
                          required: 'Phone is required.',
                        }}
                        render={({ field, fieldState }) => (
                          <InputText
                            id={field.name}
                            {...field}
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                      <label
                        htmlFor='Phone'
                        className={classNames({ 'p-error': !!errors.phone })}
                      >
                        Phone*
                      </label>
                    </span>
                    {getFormErrorMessage('phone')}
                  </div>
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='birthday'
                        control={control}
                        render={({ field }) => (
                          <Calendar
                            id={field.name}
                            value={field.value}
                            onChange={(e) => field.onChange(e.value)}
                            dateFormat='dd/mm/yy'
                            mask='99/99/9999'
                            showIcon
                          />
                        )}
                      />
                      <label htmlFor='birthday'>
                        {org ? 'Established Date' : 'Birthday'}
                      </label>
                    </span>
                  </div>
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='presentAddress'
                        control={control}
                        // rules={{ required: 'Name is required.' }}
                        render={({ field, fieldState }) => (
                          <InputText
                            id={field.name}
                            {...field}
                            autoFocus
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                      <label
                        htmlFor='presentAddress'
                        className={classNames({ 'p-error': errors.name })}
                      >
                        Present Address
                      </label>
                    </span>
                    {getFormErrorMessage('presentAddress')}
                  </div>
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='addressInBangladesh'
                        control={control}
                        // rules={{ required: 'Name is required.' }}
                        render={({ field, fieldState }) => (
                          <InputText
                            id={field.name}
                            {...field}
                            autoFocus
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                      <label
                        htmlFor='addressInBangladesh'
                        className={classNames({ 'p-error': errors.name })}
                      >
                        Address In Bangladesh (If Any)
                      </label>
                    </span>
                    {getFormErrorMessage('addressInBangladesh')}
                  </div>
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='otherContact'
                        control={control}
                        // rules={{ required: 'Name is required.' }}
                        render={({ field, fieldState }) => (
                          <InputText
                            id={field.name}
                            {...field}
                            autoFocus
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                      <label
                        htmlFor='otherContact'
                        className={classNames({ 'p-error': errors.name })}
                      >
                        Other Contact (If Any)
                      </label>
                    </span>
                    {getFormErrorMessage('otherContact')}
                  </div>
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='placeOfBirth'
                        control={control}
                        // rules={{ required: 'Name is required.' }}
                        render={({ field, fieldState }) => (
                          <InputText
                            id={field.name}
                            {...field}
                            autoFocus
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                      <label
                        htmlFor='placeOfBirth'
                        className={classNames({ 'p-error': errors.name })}
                      >
                        {org ? 'Establishment Place' : 'Place Of Birth'}
                      </label>
                    </span>
                    {getFormErrorMessage('placeOfBirth')}
                  </div>
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='nationality'
                        control={control}
                        // rules={{ required: 'Name is required.' }}
                        render={({ field, fieldState }) => (
                          <InputText
                            id={field.name}
                            {...field}
                            autoFocus
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                      <label
                        htmlFor='nationality'
                        className={classNames({ 'p-error': errors.name })}
                      >
                        {org ? 'Registration Country/Countries' : 'Nationality'}
                      </label>
                    </span>
                    {getFormErrorMessage('nationality')}
                  </div>
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='spouceOrChild'
                        control={control}
                        // rules={{ required: 'Name is required.' }}
                        render={({ field, fieldState }) => (
                          <InputText
                            id={field.name}
                            {...field}
                            autoFocus
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                      <label
                        htmlFor='spouceOrChild'
                        className={classNames({ 'p-error': errors.name })}
                      >
                        If preferred,{' '}
                        {org
                          ? 'Reference Person'
                          : 'Name of Spouce, Child(ren)'}
                      </label>
                    </span>
                    {getFormErrorMessage('spouceOrChild')}
                  </div>
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='intro'
                        control={control}
                        // rules={{ required: 'Name is required.' }}
                        render={({ field, fieldState }) => (
                          <InputTextarea
                            rows={4}
                            cols={30}
                            id={field.name}
                            {...field}
                            autoFocus
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                      <label
                        htmlFor='intro'
                        className={classNames({ 'p-error': errors.name })}
                      >
                        Brief Intro
                      </label>
                    </span>
                    {getFormErrorMessage('spouceOrChild')}
                  </div>
                  <div className='field mb-2'>
                    <span className='p-float-label'>
                      <Controller
                        name='payment'
                        control={control}
                        // rules={{ required: 'Name is required.' }}
                        render={({ field, fieldState }) => (
                          <InputText
                            id={field.name}
                            {...field}
                            autoFocus
                            className={classNames({
                              'p-invalid': fieldState.invalid,
                            })}
                          />
                        )}
                      />
                      <label
                        htmlFor='payment'
                        className={classNames({ 'p-error': errors.name })}
                      >
                        Payment
                      </label>
                    </span>
                    {getFormErrorMessage('spouceOrChild')}
                  </div>
                  <div className='mb-4'>
                    <span className='text-green-500'>
                      Membership fee {org ? '300.00$' : '200.00$'} for{' '}
                      {org ? 'Organization' : 'Individual'}
                    </span>
                  </div>
                  {/* <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='country'
                        control={control}
                        render={({ field }) => (
                          <Dropdown
                            id={field.name}
                            value={field.value}
                            onChange={(e) => field.onChange(e.value)}
                            options={countries}
                            optionLabel='name'
                          />
                        )}
                      />
                      <label htmlFor='country'>Country</label>
                    </span>
                  </div> */}
                  <div className='field-checkbox'>
                    <Controller
                      name='accept'
                      control={control}
                      rules={{ required: true }}
                      render={({ field, fieldState }) => (
                        <Checkbox
                          inputId={field.name}
                          onChange={(e) => field.onChange(e.checked)}
                          checked={field.value}
                          className={classNames({
                            'p-invalid': fieldState.invalid,
                          })}
                        />
                      )}
                    />
                    <label
                      htmlFor='accept'
                      className={classNames({ 'p-error': errors.accept })}
                    >
                      I agree to the terms and conditions*
                    </label>
                  </div>

                  <Button type='submit' label='Submit' className='mt-2' />
                </form>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberRegistrationForm;
