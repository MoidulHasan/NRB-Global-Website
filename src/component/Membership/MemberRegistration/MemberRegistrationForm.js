import React, { useEffect, useRef, useState } from 'react';
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
  // const [formData, setFormData] = useState({});

  //console.log(props);
  const genMember = props.member === 'General Member';
  const [disablePaymentType, setDisablePaymentType] = useState(false);

  useEffect(() => {
    genMember && setDisablePaymentType(true);
  }, [genMember]);

  const org = props.memberType === 'Organization';
  // console.log(org, 'ORG');

  const url = process.env.REACT_APP_BACKEND_URL;

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
    gender: '',
    designation: '',
    paymentType: '',
    paymentFee:
      props.member === 'General Member'
        ? '0'
        : props.memberType === 'Individual'
        ? '200'
        : '300',
    //paymentFee: props.memberType === 'Individual' ? '200' : '300',
    picture: {},
    birthday: null,
    category:
      props.member === 'General Member'
        ? 'General'
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

  const onSubmit = async (data) => {
    // setFormData({ formData, ...data });
    // console.log(data.picture);
    console.log(data);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('presentAddress', data.presentAddress);
    formData.append('addressInBangladesh', data.addressInBangladesh);
    formData.append('otherContact', data.otherContact);
    formData.append('placeOfBirth', data.placeOfBirth);
    formData.append('nationality', data.nationality);
    formData.append('spouceOrChild', data.spouceOrChild);
    formData.append('intro', data.intro);
    formData.append('gender', data.gender);
    formData.append('designation', data.designation);
    formData.append('paymentType', data.paymentType);
    formData.append('paymentFee', data.paymentFee);
    formData.append('birthday', data.birthday);
    formData.append('category', data.category);
    formData.append('accept', data.accept);
    formData.append('picture', data.picture[0], data.picture[0].name);

    Swal.fire({
      icon: 'warning',
      title: 'All of the information are correct?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        const requestOptions = {
          method: 'POST',
          body: formData,
        };

        try {
          fetch(`${url}/api/register`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data?.data?._id) {
                reset();
                setShowMessage(true);
                Swal.fire('Your Registration Form Submitted!', '', 'success');

                if (data?.data?.paymentType === 'PayPal') {
                  // window.location.href = 'https://stackoverflow.com';
                  window.open = ('https://stackoverflow.com', '_blank');
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
    // console.log(pictureRef);
  };

  // useEffect(() => {
  //   reset({
  //     data: '',
  //   });
  // }, [isSubmitSuccessful]);

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
                  {/* category  */}
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
                              { name: 'General', value: 'General' },
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
                      <label htmlFor='category'>Category</label>
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
                      />
                    </span>
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
                                onChange={(e) => field.onChange(e.value)}
                                options={[
                                  { name: 'Male', value: 'Male' },
                                  {
                                    name: 'Female',
                                    value: 'Female',
                                  },
                                  {
                                    name: 'Other',
                                    value: 'Other',
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
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='presentAddress'
                        control={control}
                        // rules={{ props.memberType === 'Individual' ? ' ' : '' }}
                        rules={{
                          validate: {
                            required: (value) => {
                              if (props.memberType === 'Individual' && !value)
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
                        htmlFor='presentAddress'
                        className={classNames({
                          'p-error': errors.presentAddress,
                        })}
                      >
                        {props.memberType === 'Individual'
                          ? 'Present Address*'
                          : 'Present Address'}
                      </label>
                    </span>
                    {getFormErrorMessage('presentAddress')}
                  </div>
                  {/* address in bangladesh  */}
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
                        className={classNames({
                          'p-error': errors.addressInBangladesh,
                        })}
                      >
                        Address In Bangladesh (If Any)
                      </label>
                    </span>
                    {getFormErrorMessage('addressInBangladesh')}
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
                  <div className='field mb-5'>
                    <span className='p-float-label'>
                      <Controller
                        name='spouceOrChild'
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
                        htmlFor='spouceOrChild'
                        className={classNames({
                          'p-error': errors.spouceOrChild,
                        })}
                      >
                        If preferred,{' '}
                        {org
                          ? 'Reference Person'
                          : 'Name of Spouce, Child(ren)'}
                      </label>
                    </span>
                    {getFormErrorMessage('spouceOrChild')}
                  </div>
                  {/* short intro  */}
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
                        className={classNames({ 'p-error': errors.intro })}
                      >
                        Brief Intro
                      </label>
                    </span>
                    {getFormErrorMessage('intro')}
                  </div>
                  {/* payment section  */}
                  <div className='grid'>
                    {/* payment type  */}
                    <div className='field col-12 md:col-8 mb-5'>
                      <span className='p-float-label'>
                        <Controller
                          name='paymentType'
                          control={control}
                          render={({ field }) => (
                            <Dropdown
                              disabled={disablePaymentType}
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
                        <label htmlFor='paymentType'>Payment Type</label>
                      </span>
                    </div>
                    {/* payment fee  */}
                    <div className='field mb-5 col-12 md:col-6'>
                      <span className='p-float-label p-input-icon-right'>
                        <i className='pi pi-dollar' />
                        <Controller
                          name='paymentFee'
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
                          htmlFor='paymentFee'
                          className={classNames({
                            'p-error': errors.paymentFee,
                          })}
                        >
                          Payment Fee
                        </label>
                      </span>
                      {getFormErrorMessage('paymentFee')}
                    </div>
                  </div>
                  {/* fee declaration paragraph  */}
                  <div className='mb-4'>
                    {props.member === 'General Member' ? (
                      <span className='text-green-500'>
                        Membership fee is not applicable for the general
                        members.
                      </span>
                    ) : (
                      <span className='text-green-500'>
                        Membership fee {org ? '300.00$' : '200.00$'} for{' '}
                        {org ? 'Organization' : 'Individual'}
                      </span>
                    )}
                  </div>
                  {/* accept field  */}
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
