import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { useForm, Controller, FormProvider } from 'react-hook-form';
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
import useDataContexts from '../../../hooks/useDataContexts';

const MemberRegistrationForm = (props) => {
  const [showMessage, setShowMessage] = useState(false);

  const genMember = props.member === 'General Member';

  const [disablemethod, setDisablemethod] = useState(false);

  const { countries } = useDataContexts();

  useEffect(() => {
    genMember && setDisablemethod(true);
  }, [genMember]);

  const org = props.memberType === 'Organization';

  const url = process.env.REACT_APP_BACKEND_URL;
  const token = process.env.REACT_APP_TOKEN;

  const todayDate = new Date();
  let day = todayDate.getDate();
  let month = todayDate.getMonth() + 1;
  let year = todayDate.getFullYear();

  let currentDate = `${day}/${month}/${year}`;
  console.log(currentDate);

  const defaultValues = {
    name: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    presentAddress: {},
    socialLinks: {},
    payment: {},
    facebook: '',
    linkedIn: '',
    whatsapp: '',
    website: '',
    bdAddress: '',
    otherContact: '',
    placeOfBirth: '',
    nationality: '',
    otherContact: '',
    tosAgreement: '',
    about: '',
    gender: '',
    picture: {},
    designation: '',
    //these three are for payment
    status:
      props.member === 'General Member' || 'Young Congress' ? 'N/A' : 'Pending',
    method:
      props.member === 'General Member' || 'Young Congress'
        ? 'N/A'
        : 'Hands On',
    date: currentDate,
    amount:
      props.member === 'General Member' || 'Young Congress'
        ? '0'
        : props.memberType === 'Individual'
        ? '200'
        : '300',

    imageUrl: '',
    birthday: null,
    memberCategory:
      props.member === 'General Member'
        ? 'generalMember'
        : props.member === 'Young Congress'
        ? 'youngcongressMember'
        : props.memberType === 'Individual'
        ? 'Executive Individual'
        : 'Executive Organization',
  };

  const {
    control,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
    register,
  } = useForm({ defaultValues });
  // console.log(formData);

  //image upload
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState({});

  console.log(file);

  const [imageURL, setImageURL] = useState('');
  // console.log(imageURL);

  const load = () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('member', file[0], file[0].name);

    const OtherRequestOptions = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'no-cors',
      },
      body: formData,
    };

    fetch(`${url}/public/images/`, OtherRequestOptions)
      .then((res) => res.json())
      .then((data) => {
        setImageURL(data.url);
        data.success && setLoading(false);
      });

    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  };

  const onSubmit = async (data) => {
    //setFormData({ formData, ...data });
    // console.log(data.picture);
    console.log(data);

    const formData = {
      tosAgreement: data.tosAgreement,
      name: data.name,
      email: data.email,
      phone: data.phone,
      presentAddress: { country: data.country, address: data.address },
      socialLinks: {
        facebook: data.facebook,
        linkedIn: data.linkedIn,
        whatsapp: data.facebook,
        website: data.website,
      },
      payment: {
        status: data.status,
        method: data.method,
        amount: data.amount,
        date: currentDate,
      },
      bdAddress: data.bdAddress,
      otherContact: data.otherContact,
      placeOfBirth: data.placeOfBirth,
      nationality: data.nationality,
      otherContact: data.otherContact,
      about: data.about,
      gender: data.gender,
      designation: data.designation,

      imageUrl: imageURL,
      birthday: data.birthday,
      memberCategory: data.memberCategory,
      registrationDate: currentDate,
    };

    //console.log(formData);

    Swal.fire({
      icon: 'warning',
      title: 'All of the information are correct?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        const requestOptions = {
          method: 'POST',

          headers: {
            'Access-Control-Allow-Origin': 'no-cors',
            'content-type': 'application/json',
          },
          body: JSON.stringify(formData),
        };

        try {
          fetch(`${url}/public/members/`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data?.success) {
                reset();
                setShowMessage(true);
                Swal.fire('Your Registration Form Submitted!', '', 'success');

                if (data?.data?.method === 'PayPal') {
                  window.open = ('https://kajkaminitiative.com', '_blank');
                }
              } else {
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Error!',
                  html: data?.message,
                  showConfirmButton: false,
                  timer: 1200,
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
                timer: 1200,
              });
            });
        } catch (err) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Failed!',
            html: err.message,
            showConfirmButton: false,
            timer: 1200,
          });
        }
      }
    });
  };

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className='p-error'>{errors[name].message}</small>
    );
  };

  const [paymentMethod, setPaymentMethod] = useState('');

  const onPaymentMethodChanged = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className='p-container my-4'>
      <div className='registrationContainer py-2 px-2'>
        <div className='grid'>
          <div className='col-12 md:col-4 flex-order-2 md:flex-order-1 mt-6 md:mt-0'>
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
                <span className='mt-1 pr-1 md:pr-3 spanSupportText mb-2'>
                  NRb Global is one of the Bangladesh's largest non residential
                  community that provides a one-stop platform for students,
                  youth, businessmen, job holders to cope up in foreign, learn
                  new screen,network with peers, and grow as an individual.
                </span>
              </div>
              <div className='p-3 reviewKarim mt-3 md:mt-0'>
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
          <div className='col-12 md:col-8 flex-order-1 md:flex-order-2'>
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
                  {/* memberCategory  */}
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='memberCategory'
                        control={control}
                        render={({ field }) => (
                          <Dropdown
                            disabled
                            id={field.name}
                            value={field.value}
                            onChange={(e) => field.onChange(e.value)}
                            options={[
                              {
                                name: 'General Member',
                                value: 'generalMember',
                              },
                              {
                                name: 'Young Congress Member',
                                value: 'youngcongressMember',
                              },
                              {
                                name: 'Executive Individual',
                                value: 'Executive Individual',
                              },
                              {
                                name: 'Executive Organization',
                                value: 'Executive Organization',
                              },
                            ]}
                            optionLabel='name'
                          />
                        )}
                      />
                      <label htmlFor='memberCategory'>Member Category</label>
                    </span>
                  </div>
                  {/* name  */}
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
                  {/* picture  */}
                  <div className='field mb-5'>
                    <div className='flex  justify-content-between'>
                      <span className='p-label p-input-icon-right'>
                        <i className='pi pi-pi-file' />
                        <label
                          htmlFor='picture'
                          className='block text-gray-600 mb-1 ml-2'
                        >
                          Picture*
                        </label>
                        {/* <Controller
                        name='picture'
                        control={control}
                        rules={{
                          required: 'Photo is required.',
                        }}
                        render={({ field, fieldState }) => (
                          <input
                            ref={pictureRef}
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
                      /> */}
                        <input
                          type='file'
                          name='picture'
                          {...register('picture', {
                            required: 'Picture is required.',
                          })}
                          onChange={(e) => setFile(e.target.files)}
                        />
                      </span>
                      <Button
                        className='my-2 photoUploadButton'
                        label='Upload'
                        loading={loading}
                        onClick={load}
                      />
                    </div>
                    {getFormErrorMessage('picture')}
                  </div>
                  {/* email  */}
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
                  {/* phone number  */}
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
                  {/* gender and designation for individual  */}
                  {!org && (
                    <div className='grid'>
                      <div className='field col-12 md:col-6 mb-5'>
                        <span className='p-float-label'>
                          <Controller
                            name='gender'
                            control={control}
                            render={({ field }) => (
                              <Dropdown
                                id={field.name}
                                value={field.value}
                                placeholder='Select Your Gender'
                                onChange={(e) => {
                                  field.onChange(e.value);
                                  console.log(e);
                                }}
                                options={[
                                  { name: 'Male', value: 'Male' },
                                  {
                                    name: 'Female',
                                    value: 'Female',
                                  },
                                  {
                                    name: 'Others',
                                    value: 'Others',
                                  },
                                ]}
                                optionLabel='name'
                              />
                            )}
                          />
                          <label htmlFor='gender'>Gender</label>
                        </span>
                      </div>
                      <div className='field col-12 md:col-6 mb-5'>
                        <span className='p-float-label p-input-icon-right'>
                          <Controller
                            name='designation'
                            control={control}
                            // rules={{
                            //   required: 'Designation is required.',
                            // }}
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
                            htmlFor='Designation'
                            className={classNames({
                              'p-error': !!errors.designation,
                            })}
                          >
                            Designation
                          </label>
                        </span>
                        {getFormErrorMessage('designation')}
                      </div>
                    </div>
                  )}
                  {/* birthday  */}
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='birthday'
                        control={control}
                        rules={{
                          required: 'Birthday is required.',
                        }}
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
                        {org ? 'Established Date*' : 'Birthday*'}
                      </label>
                    </span>
                  </div>
                  {/* present address  */}
                  <div className='mb-5'>
                    <label className='block text-gray-600 mb-4 ml-2'>
                      Present Address
                    </label>
                    <div className='grid'>
                      <div className='field col-12 md:col-6'>
                        <span className='p-float-label'>
                          <Controller
                            name='country'
                            control={control}
                            rules={{
                              validate: {
                                required: (value) => {
                                  if (
                                    props.memberType === 'Individual' &&
                                    !value
                                  )
                                    return 'Present Address Required';
                                  return true;
                                },
                              },
                            }}
                            render={({ field }) => (
                              <Dropdown
                                id={field.name}
                                value={field.value}
                                placeholder='Select Your Country'
                                onChange={(e) => {
                                  field.onChange(e.value);
                                  console.log(e);
                                }}
                                options={countries}
                                optionLabel='name.common'
                                optionValue='name.common'
                              />
                            )}
                          />
                          <label htmlFor='country'>Country*</label>
                        </span>
                      </div>
                      <div className='field col-12 md:col-6'>
                        <span className='p-float-label '>
                          <Controller
                            name='address'
                            control={control}
                            // rules={{ props.memberType === 'Individual' ? ' ' : '' }}
                            rules={{
                              validate: {
                                required: (value) => {
                                  if (
                                    props.memberType === 'Individual' &&
                                    !value
                                  )
                                    return 'Present Address Required';
                                  return true;
                                },
                              },
                            }}
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
                            htmlFor='address'
                            className={classNames({
                              'p-error': errors.address,
                            })}
                          >
                            {props.memberType === 'Individual'
                              ? 'Address*'
                              : 'Address'}
                          </label>
                        </span>
                      </div>
                    </div>
                    {getFormErrorMessage('address')}
                  </div>
                  {/* address in bangladesh  */}
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='bdAddress'
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
                        htmlFor='bdAddress'
                        className={classNames({
                          'p-error': errors.bdAddress,
                        })}
                      >
                        Address In Bangladesh (If Any)
                      </label>
                    </span>
                    {getFormErrorMessage('bdAddress')}
                  </div>
                  {/* other contact  */}
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='otherContact'
                        control={control}
                        // rules={{ required: 'Other Contact is required.' }}
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
                        className={classNames({
                          'p-error': errors.otherContact,
                        })}
                      >
                        Other Contact (If Any)
                      </label>
                    </span>
                    {getFormErrorMessage('otherContact')}
                  </div>
                  {/* place of Birth or Organization Place  */}
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='placeOfBirth'
                        control={control}
                        // rules={{ required: 'POB is required.' }}
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
                        className={classNames({
                          'p-error': errors.placeOfBirth,
                        })}
                      >
                        {org ? 'Establishment Place' : 'Place Of Birth'}
                      </label>
                    </span>
                    {getFormErrorMessage('placeOfBirth')}
                  </div>
                  {/* nationality  */}
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='nationality'
                        control={control}
                        rules={{
                          validate: {
                            required: (value) => {
                              if (props.memberType === 'Individual' && !value)
                                return 'Nationality is required';
                              return true;
                            },
                          },
                        }}
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
                        className={classNames({
                          'p-error': errors.nationality,
                        })}
                      >
                        {org
                          ? 'Registration Country/Countries'
                          : 'Nationality*'}
                      </label>
                    </span>
                    {getFormErrorMessage('nationality')}
                  </div>
                  {/* spouce or children or refered person  */}
                  {/* <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='otherContact'
                        control={control}
                        // rules={{ required: 'Spouce is required.' }}
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
                        className={classNames({
                          'p-error': errors.otherContact,
                        })}
                      >
                        If preferred,{' '}
                        {org
                          ? 'Reference Person'
                          : 'Name of Spouce, Child(ren)'}
                      </label>
                    </span>
                    {getFormErrorMessage('otherContact')}
                  </div> */}
                  {/* short about  */}
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='about'
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
                        htmlFor='about'
                        className={classNames({ 'p-error': errors.about })}
                      >
                        About You
                      </label>
                    </span>
                    {getFormErrorMessage('about')}
                  </div>
                  <div className='mb-5'>
                    <label className='block text-gray-600 mb-4 ml-2'>
                      Social Links
                    </label>
                    <div className='grid'>
                      <div className='field col-12 md:col-6 lg:md-3'>
                        <span className='p-float-label '>
                          <Controller
                            name='facebook'
                            control={control}
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
                            htmlFor='facebook'
                            className={classNames({
                              'p-error': errors.facebook,
                            })}
                          >
                            <span class='pi pi-facebook mr-1'></span>
                            Facebook
                          </label>
                        </span>
                      </div>{' '}
                      <div className='field col-12 md:col-6 lg:md-3'>
                        <span className='p-float-label '>
                          <Controller
                            name='whatsapp'
                            control={control}
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
                            htmlFor='whatsapp'
                            className={classNames({
                              'p-error': errors.whatsapp,
                            })}
                          >
                            <span class='pi pi-whatsapp mr-1'></span>
                            Whatsapp
                          </label>
                        </span>
                      </div>{' '}
                      <div className='field col-12 md:col-6 lg:md-3'>
                        <span className='p-float-label '>
                          <Controller
                            name='linkedIn'
                            control={control}
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
                            htmlFor='linkedIn'
                            className={classNames({
                              'p-error': errors.linkedIn,
                            })}
                          >
                            <span class='pi pi-linkedin mr-1'></span>
                            LinkedIn
                          </label>
                        </span>
                      </div>
                      <div className='field col-12 md:col-6 lg:md-3'>
                        <span className='p-float-label '>
                          <Controller
                            name='website'
                            control={control}
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
                            htmlFor='website'
                            className={classNames({
                              'p-error': errors.website,
                            })}
                          >
                            <span class='pi pi-globe mr-1'></span>
                            Website
                          </label>
                        </span>
                      </div>
                    </div>
                    {getFormErrorMessage('website')}
                  </div>
                  {/* payment section  */}
                  <div className='grid'>
                    {/* payment type  */}
                    <div className='field col-12 md:col-8 mb-5'>
                      <span className='p-float-label'>
                        {/* <Controller
                          name='method'
                          control={control}
                          render={({ field }) => (
                            <Dropdown
                              disabled={disablemethod}
                              id={field.name}
                              value={field.value}
                              placeholder='Select Your Payment Type'
                              onChange={(e) => {
                                field.onChange(e.value);
                                onPaymentMethodChanged(e);
                              }}
                              options={[
                                { name: 'Hands On', value: 'Hands On' },
                                {
                                  name: 'Paypal',
                                  value: 'Paypal',
                                },
                              ]}
                              optionLabel='name'
                            />
                          )}
                        />
                        <label htmlFor='method'>Payment Type</label> */}
                        <Controller
                          name='method'
                          control={control}
                          render={({ field, fieldState }) => (
                            <InputText
                              disabled
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
                          htmlFor='method'
                          className={classNames({
                            'p-error': errors.method,
                          })}
                        >
                          Payment Method
                        </label>
                      </span>
                      {getFormErrorMessage('method')}
                    </div>
                    <div className='field col-12 md:col-4'>
                      <span className='p-float-label'>
                        {/* <Controller
                          name='status'
                          control={control}
                          render={({ field }) => (
                            <Dropdown
                              id={field.name}
                              disabled={disablemethod}
                              value={field.value}
                              placeholder='Status'
                              onChange={(e) => {
                                field.onChange(e.value);
                                console.log(e);
                              }}
                              options={[
                                { name: 'N/A', value: 'N/A' },
                                {
                                  name: 'Paid',
                                  value: 'Paid',
                                },
                                {
                                  name: 'Pending',
                                  value: 'Pending',
                                },
                              ]}
                              optionLabel='name'
                            />
                          )}
                        />
                        <label htmlFor='status'>Payment Status</label> */}
                        <Controller
                          name='status'
                          control={control}
                          render={({ field, fieldState }) => (
                            <InputText
                              disabled
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
                          htmlFor='status'
                          className={classNames({
                            'p-error': errors.status,
                          })}
                        >
                          Payment Status
                        </label>
                      </span>
                      {getFormErrorMessage('status')}
                    </div>
                    {/* payment fee  */}
                    <div className='field mb-5 col-12 md:col-6'>
                      <span className='p-float-label p-input-icon-right'>
                        <i className='pi pi-dollar' />
                        <Controller
                          name='amount'
                          control={control}
                          render={({ field, fieldState }) => (
                            <InputText
                              disabled
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
                          htmlFor='amount'
                          className={classNames({
                            'p-error': errors.amount,
                          })}
                        >
                          Payment Fee
                        </label>
                      </span>
                      {getFormErrorMessage('amount')}
                    </div>
                  </div>
                  {/* fee declaration paragraph  */}
                  <div className='mb-4'>
                    {props.member === 'General Member' ? (
                      <span className='text-green-500'>
                        General Members can register free of cost.
                      </span>
                    ) : (
                      <span className='text-green-500'>
                        Membership fee {org ? '300.00$' : '200.00$'} for{' '}
                        {org ? 'Organization' : 'Individual'}
                      </span>
                    )}
                  </div>
                  {/* tosAgreement field  */}
                  <div className='field-checkbox'>
                    <Controller
                      name='tosAgreement'
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
                      htmlFor='tosAgreement'
                      className={classNames({ 'p-error': errors.tosAgreement })}
                    >
                      I agree to the terms and conditions*
                    </label>
                  </div>
                  {/* submit button  */}
                  {paymentMethod === 'Hands On' || paymentMethod === '' ? (
                    <Button type='submit' label='Submit' className='mt-2' />
                  ) : (
                    <Button
                      // onClick={() => onClickPaypalRedirect()}
                      type='submit'
                      label='Submit and Pay with PayPal'
                      className='mt-2'
                    />
                  )}
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
