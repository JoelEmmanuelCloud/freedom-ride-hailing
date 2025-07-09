import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Move InputField and SelectField outside the main component to prevent re-creation on each render
const InputField = ({ label, type = "text", value, onChange, error, required = false, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-base ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
      autoComplete="off"
      {...props}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const SelectField = ({ label, value, onChange, options, error, required = false, placeholder = "Select..." }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-base ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const RiderApplicationForm = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    region: '',
    
    // Work Preferences
    workingModel: '',
    preferredWorkingHours: '',
    
    // Vehicle Information
    hasMotorbike: null,
    motorbikeDetails: {
      make: '',
      model: '',
      year: '',
      registrationNumber: '',
      condition: ''
    },
    interestedInOwnershipProgram: false,
    
    // License & Experience
    licenseNumber: '',
    licenseExpiryDate: '',
    yearsOfRidingExperience: '',
    hasCommercialExperience: false,
    
    // Emergency Contact
    emergencyContact: {
      firstName: '',
      lastName: '',
      phone: '',
      relationship: ''
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const totalSteps = 5;

  const steps = [
    { id: 1, title: 'Personal Info', description: 'Basic information about you' },
    { id: 2, title: 'Work Preferences', description: 'Your preferred working style' },
    { id: 3, title: 'Vehicle Details', description: 'Motorbike information' },
    { id: 4, title: 'License & Experience', description: 'Your riding credentials' },
    { id: 5, title: 'Emergency Contact', description: 'Someone we can reach' }
  ];

  const ghanaRegions = [
    'Greater Accra', 'Ashanti', 'Western', 'Central', 'Eastern', 'Volta',
    'Northern', 'Upper East', 'Upper West', 'Brong Ahafo', 'Western North',
    'Ahafo', 'Bono', 'Bono East', 'Oti', 'Savannah', 'North East'
  ];

  // Use useCallback to memoize the handleInputChange function
  const handleInputChange = useCallback((field, value) => {
    // Handle nested field updates (e.g., 'motorbikeDetails.make')
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      // Handle top-level field updates
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
    
    // Clear validation error when user starts typing
    setValidationErrors(prev => {
      if (prev[field]) {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      }
      return prev;
    });
  }, []);

  if (!isOpen) return null;

  const validateStep = (step) => {
    const errors = {};
    
    switch (step) {
      case 1:
        if (!formData.firstName.trim()) errors.firstName = 'First name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        if (!formData.email.trim()) errors.email = 'Email is required';
        if (!formData.phone.trim()) errors.phone = 'Phone number is required';
        if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
        if (!formData.gender) errors.gender = 'Gender is required';
        if (!formData.address.trim()) errors.address = 'Address is required';
        if (!formData.city.trim()) errors.city = 'City is required';
        if (!formData.region) errors.region = 'Region is required';
        break;
        
      case 2:
        if (!formData.workingModel) errors.workingModel = 'Working model is required';
        if (!formData.preferredWorkingHours) errors.preferredWorkingHours = 'Working hours preference is required';
        break;
        
       case 3:
          // Debug log to see the actual value
        console.log('hasMotorbike value:', formData.hasMotorbike, 'type:', typeof formData.hasMotorbike);
        
        // Check if hasMotorbike is explicitly set to true or false
        if (typeof formData.hasMotorbike !== 'boolean') {
          errors.hasMotorbike = 'Please specify if you have a motorbike';
        }
        // Only validate motorbike details if user has a motorbike
        if (formData.hasMotorbike === true) {
          if (!formData.motorbikeDetails.make.trim()) {
            errors['motorbikeDetails.make'] = 'Motorbike make is required';
          }
          if (!formData.motorbikeDetails.model.trim()) {
            errors['motorbikeDetails.model'] = 'Motorbike model is required';
          }
          if (!formData.motorbikeDetails.year) {
            errors['motorbikeDetails.year'] = 'Motorbike year is required';
          }
          if (!formData.motorbikeDetails.registrationNumber.trim()) {
            errors['motorbikeDetails.registrationNumber'] = 'Registration number is required';
          }
          if (!formData.motorbikeDetails.condition) {
            errors['motorbikeDetails.condition'] = 'Motorbike condition is required';
          }
        }
        break;
        
      case 4:
        if (!formData.licenseNumber.trim()) errors.licenseNumber = 'License number is required';
        if (!formData.licenseExpiryDate) errors.licenseExpiryDate = 'License expiry date is required';
        if (!formData.yearsOfRidingExperience) errors.yearsOfRidingExperience = 'Years of experience is required';
        break;
        
      case 5:
        if (!formData.emergencyContact.firstName.trim()) errors['emergencyContact.firstName'] = 'Emergency contact first name is required';
        if (!formData.emergencyContact.lastName.trim()) errors['emergencyContact.lastName'] = 'Emergency contact last name is required';
        if (!formData.emergencyContact.phone.trim()) errors['emergencyContact.phone'] = 'Emergency contact phone is required';
        if (!formData.emergencyContact.relationship.trim()) errors['emergencyContact.relationship'] = 'Relationship is required';
        break;
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitApplication = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Prepare data for submission with all required fields
      const submitData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        address: formData.address,
        city: formData.city,
        region: formData.region,
        workingModel: formData.workingModel,
        preferredWorkingHours: formData.preferredWorkingHours,
        hasMotorbike: formData.hasMotorbike,
        interestedInOwnershipProgram: formData.interestedInOwnershipProgram,
        licenseNumber: formData.licenseNumber,
        licenseExpiryDate: formData.licenseExpiryDate,
        yearsOfRidingExperience: parseInt(formData.yearsOfRidingExperience),
        hasCommercialExperience: formData.hasCommercialExperience,
        emergencyContact: {
          firstName: formData.emergencyContact.firstName,
          lastName: formData.emergencyContact.lastName,
          phone: formData.emergencyContact.phone,
          relationship: formData.emergencyContact.relationship
        }
      };

      // Only include motorbikeDetails if user has a motorbike
      if (formData.hasMotorbike === true) {
        submitData.motorbikeDetails = {
          make: formData.motorbikeDetails.make,
          model: formData.motorbikeDetails.model,
          year: parseInt(formData.motorbikeDetails.year),
          registrationNumber: formData.motorbikeDetails.registrationNumber,
          condition: formData.motorbikeDetails.condition
        };
      }

      const response = await fetch('https://api-freedom.com/api/v2/riders/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
      } else {
        console.error('Submission failed:', data); // Debug log
        setSubmitError(data.message || 'Application submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error); // Debug log
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="First Name"
                value={formData.firstName}
                onChange={(value) => handleInputChange('firstName', value)}
                error={validationErrors.firstName}
                required
              />
              <InputField
                label="Last Name"
                value={formData.lastName}
                onChange={(value) => handleInputChange('lastName', value)}
                error={validationErrors.lastName}
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                error={validationErrors.email}
                required
              />
              <InputField
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value)}
                error={validationErrors.phone}
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Date of Birth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(value) => handleInputChange('dateOfBirth', value)}
                error={validationErrors.dateOfBirth}
                required
              />
              <SelectField
                label="Gender"
                value={formData.gender}
                onChange={(value) => handleInputChange('gender', value)}
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' }
                ]}
                error={validationErrors.gender}
                required
              />
            </div>
            <InputField
              label="Address"
              value={formData.address}
              onChange={(value) => handleInputChange('address', value)}
              error={validationErrors.address}
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="City"
                value={formData.city}
                onChange={(value) => handleInputChange('city', value)}
                error={validationErrors.city}
                required
              />
              <SelectField
                label="Region"
                value={formData.region}
                onChange={(value) => handleInputChange('region', value)}
                options={ghanaRegions.map(region => ({ value: region, label: region }))}
                error={validationErrors.region}
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Working Model <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                     onClick={() => handleInputChange('workingModel', 'in-house')}>
                  <input
                    type="radio"
                    name="workingModel"
                    value="in-house"
                    checked={formData.workingModel === 'in-house'}
                    onChange={() => handleInputChange('workingModel', 'in-house')}
                    className="mr-3 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-medium text-base">In-House Rider</h4>
                    <p className="text-sm text-gray-600 mt-1">Work directly with Freedom as a full employee</p>
                  </div>
                </div>
                <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                     onClick={() => handleInputChange('workingModel', 'external')}>
                  <input
                    type="radio"
                    name="workingModel"
                    value="external"
                    checked={formData.workingModel === 'external'}
                    onChange={() => handleInputChange('workingModel', 'external')}
                    className="mr-3 mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-medium text-base">External Rider</h4>
                    <p className="text-sm text-gray-600 mt-1">Work as an independent contractor</p>
                  </div>
                </div>
              </div>
              {validationErrors.workingModel && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.workingModel}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Preferred Working Hours <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {[
                  { value: 'full-time', label: 'Full-time', desc: '8+ hours per day' },
                  { value: 'part-time', label: 'Part-time', desc: '4-6 hours per day' },
                  { value: 'flexible', label: 'Flexible', desc: 'Work when available' }
                ].map(option => (
                  <div key={option.value} 
                       className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                       onClick={() => handleInputChange('preferredWorkingHours', option.value)}>
                    <input
                      type="radio"
                      name="preferredWorkingHours"
                      value={option.value}
                      checked={formData.preferredWorkingHours === option.value}
                      onChange={() => handleInputChange('preferredWorkingHours', option.value)}
                      className="mr-3 mt-1 flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-medium text-base">{option.label}</h4>
                      <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {validationErrors.preferredWorkingHours && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.preferredWorkingHours}</p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Do you have a motorbike? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                     onClick={() => handleInputChange('hasMotorbike', true)}>
                  <input
                    type="radio"
                    name="hasMotorbike"
                    checked={formData.hasMotorbike === true}
                    onChange={() => handleInputChange('hasMotorbike', true)}
                    className="mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="font-medium text-base">Yes, I have a motorbike</span>
                </div>
                <div className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                     onClick={() => handleInputChange('hasMotorbike', false)}>
                  <input
                    type="radio"
                    name="hasMotorbike"
                    checked={formData.hasMotorbike === false}
                    onChange={() => handleInputChange('hasMotorbike', false)}
                    className="mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="font-medium text-base">No, I don't have one</span>
                </div>
              </div>
              {validationErrors.hasMotorbike && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.hasMotorbike}</p>
              )}
            </div>

            {formData.hasMotorbike === true && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-4 text-base">Motorbike Details</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Make"
                      value={formData.motorbikeDetails.make}
                      onChange={(value) => handleInputChange('motorbikeDetails.make', value)}
                      error={validationErrors['motorbikeDetails.make']}
                      required
                    />
                    <InputField
                      label="Model"
                      value={formData.motorbikeDetails.model}
                      onChange={(value) => handleInputChange('motorbikeDetails.model', value)}
                      error={validationErrors['motorbikeDetails.model']}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Year"
                      type="number"
                      value={formData.motorbikeDetails.year}
                      onChange={(value) => handleInputChange('motorbikeDetails.year', value)}
                      error={validationErrors['motorbikeDetails.year']}
                      required
                    />
                    <InputField
                      label="Registration Number"
                      value={formData.motorbikeDetails.registrationNumber}
                      onChange={(value) => handleInputChange('motorbikeDetails.registrationNumber', value)}
                      error={validationErrors['motorbikeDetails.registrationNumber']}
                      required
                    />
                  </div>
                  <SelectField
                    label="Condition"
                    value={formData.motorbikeDetails.condition}
                    onChange={(value) => handleInputChange('motorbikeDetails.condition', value)}
                    options={[
                      { value: 'excellent', label: 'Excellent' },
                      { value: 'good', label: 'Good' },
                      { value: 'fair', label: 'Fair' },
                      { value: 'poor', label: 'Poor' }
                    ]}
                    error={validationErrors['motorbikeDetails.condition']}
                    required
                  />
                </div>
              </div>
            )}

            <div className="flex items-start">
              <input
                type="checkbox"
                id="ownershipProgram"
                checked={formData.interestedInOwnershipProgram}
                onChange={(e) => handleInputChange('interestedInOwnershipProgram', e.target.checked)}
                className="mr-3 mt-1 flex-shrink-0"
              />
              <label htmlFor="ownershipProgram" className="text-sm">
                I'm interested in the motorbike ownership program (12-month payment plan)
              </label>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Driver's License Number"
                value={formData.licenseNumber}
                onChange={(value) => handleInputChange('licenseNumber', value)}
                error={validationErrors.licenseNumber}
                required
              />
              <InputField
                label="License Expiry Date"
                type="date"
                value={formData.licenseExpiryDate}
                onChange={(value) => handleInputChange('licenseExpiryDate', value)}
                error={validationErrors.licenseExpiryDate}
                required
              />
            </div>
            <InputField
              label="Years of Riding Experience"
              type="number"
              value={formData.yearsOfRidingExperience}
              onChange={(value) => handleInputChange('yearsOfRidingExperience', value)}
              error={validationErrors.yearsOfRidingExperience}
              required
              min="0"
            />
            <div className="flex items-start pt-2">
              <input
                type="checkbox"
                id="commercialExperience"
                checked={formData.hasCommercialExperience}
                onChange={(e) => handleInputChange('hasCommercialExperience', e.target.checked)}
                className="mr-3 mt-1 flex-shrink-0"
              />
              <label htmlFor="commercialExperience" className="text-sm">
                I have commercial riding/delivery experience
              </label>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h4 className="font-medium mb-4 text-base">Emergency Contact Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="First Name"
                value={formData.emergencyContact.firstName}
                onChange={(value) => handleInputChange('emergencyContact.firstName', value)}
                error={validationErrors['emergencyContact.firstName']}
                required
              />
              <InputField
                label="Last Name"
                value={formData.emergencyContact.lastName}
                onChange={(value) => handleInputChange('emergencyContact.lastName', value)}
                error={validationErrors['emergencyContact.lastName']}
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Phone Number"
                type="tel"
                value={formData.emergencyContact.phone}
                onChange={(value) => handleInputChange('emergencyContact.phone', value)}
                error={validationErrors['emergencyContact.phone']}
                required
              />
              <InputField
                label="Relationship"
                value={formData.emergencyContact.relationship}
                onChange={(value) => handleInputChange('emergencyContact.relationship', value)}
                error={validationErrors['emergencyContact.relationship']}
                required
                placeholder="e.g., Father, Mother, Brother, Friend"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (submitSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Thank you for applying to join Freedom. We'll review your application and get back to you soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                setSubmitSuccess(false);
                setCurrentStep(1);
                setFormData({
                  firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '', gender: '',
                  address: '', city: '', region: '', workingModel: '', preferredWorkingHours: '',
                  hasMotorbike: null, motorbikeDetails: { make: '', model: '', year: '', registrationNumber: '', condition: '' },
                  interestedInOwnershipProgram: false, licenseNumber: '', licenseExpiryDate: '',
                  yearsOfRidingExperience: '', hasCommercialExperience: false,
                  emergencyContact: { firstName: '', lastName: '', phone: '', relationship: '' }
                });
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-sm sm:text-base"
            >
              Submit Another Application
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-orange-500 text-white p-4 sm:p-6 rounded-t-lg flex justify-between items-start">
          <div className="flex-1 mr-4">
            <h2 className="text-lg sm:text-2xl font-bold">Join Freedom - Rider Application</h2>
            <p className="text-orange-100 mt-1 sm:mt-2 text-sm sm:text-base">
              Step {currentStep} of {totalSteps}: {steps[currentStep - 1].description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-orange-200 transition duration-300 flex-shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-200 h-2">
          <div 
            className="bg-orange-500 h-2 transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Step Navigation - Mobile Optimized */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b">
          {/* Mobile: Show only current step with counter */}
          <div className="sm:hidden flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-medium">
                {currentStep}
              </div>
              <span className="ml-2 text-sm text-orange-500 font-medium">
                {steps[currentStep - 1].title}
              </span>
            </div>
            <span className="text-xs text-gray-500">
              {currentStep} of {totalSteps}
            </span>
          </div>

          {/* Desktop: Show all steps */}
          <div className="hidden sm:flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.id ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.id}
                </div>
                <span className={`ml-2 text-sm ${currentStep >= step.id ? 'text-orange-500' : 'text-gray-500'}`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 ml-4 ${currentStep > step.id ? 'bg-orange-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-4 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {submitError && (
            <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-700 text-sm">{submitError}</p>
            </div>
          )}
        </div>

        {/* Footer - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-gray-50 rounded-b-lg gap-4 sm:gap-0">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`w-full sm:w-auto px-6 py-3 rounded-lg font-medium transition duration-300 text-sm sm:text-base ${
              currentStep === 1 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Previous
          </button>

          <span className="text-sm text-gray-500 order-first sm:order-none">
            {currentStep} of {totalSteps}
          </span>

          {currentStep < totalSteps ? (
            <button
              onClick={nextStep}
              className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition duration-300 text-sm sm:text-base"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submitApplication}
              disabled={isSubmitting}
              className={`w-full sm:w-auto px-6 py-3 rounded-lg font-medium transition duration-300 text-sm sm:text-base ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700'
              } text-white`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RiderApplicationForm;