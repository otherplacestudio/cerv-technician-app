'use client'

import React, { useState } from 'react'
import { Check, ChevronDown, Image as ImageIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface Property {
  id: string
  name: string
  address: string
  image?: string
}

interface ServiceData {
  property?: Property
  serviceCategory?: string
  serviceType?: string
  numberOfPools?: number
  poolType?: string
  equipmentType?: string
  serviceFrequency?: string
  additionalNotes?: string
}

interface AddNewServiceStepperProps {
  properties?: Property[]
  serviceCategories?: string[]
  serviceTypes?: Record<string, string[]>
  poolTypes?: string[]
  equipmentTypes?: string[]
  serviceFrequencies?: string[]
  onSubmit?: (data: ServiceData) => void
  className?: string
}

export const AddNewServiceStepper: React.FC<AddNewServiceStepperProps> = ({
  properties = [
    { id: '1', name: 'Meridian Plaza', address: 'Downtown Austin, TX', image: '/api/placeholder/40/40' },
    { id: '2', name: 'Sunset Gardens', address: 'West Austin, TX', image: '/api/placeholder/40/40' },
    { id: '3', name: 'Tech Campus', address: 'North Austin, TX', image: '/api/placeholder/40/40' }
  ],
  serviceCategories = ['Pool Maintenance', 'Landscape Services', 'Pest Control', 'HVAC Services'],
  serviceTypes = {
    'Pool Maintenance': ['Regular Cleaning', 'Chemical Treatment', 'Equipment Repair', 'Deep Clean'],
    'Landscape Services': ['Lawn Mowing', 'Tree Trimming', 'Irrigation', 'Seasonal Planting'],
    'Pest Control': ['General Treatment', 'Termite Control', 'Rodent Control', 'Mosquito Control'],
    'HVAC Services': ['AC Repair', 'Heating Repair', 'Maintenance', 'Installation']
  },
  poolTypes = ['Kiddie Pool', 'Lap Pool', 'Infinity Pool', 'Above Ground'],
  equipmentTypes = ['Heater', 'Filter', 'Pump', 'Chlorinator'],
  serviceFrequencies = ['Monthly', 'Bi-Weekly', 'Weekly', 'One-Time'],
  onSubmit,
  className
}) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [serviceData, setServiceData] = useState<ServiceData>({
    numberOfPools: 1
  })

  const steps = [
    { number: 1, label: 'Property' },
    { number: 2, label: 'Service' },
    { number: 3, label: 'Type' },
    { number: 4, label: 'Details' }
  ]

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1:
        return !!serviceData.property
      case 2:
        return !!serviceData.serviceCategory
      case 3:
        return !!serviceData.serviceType
      case 4:
        return true // Details step is always considered complete
      default:
        return false
    }
  }

  const canSubmit = () => {
    return serviceData.property && 
           serviceData.serviceCategory && 
           serviceData.serviceType &&
           (serviceData.serviceCategory !== 'Pool Maintenance' || 
            (serviceData.poolType && serviceData.equipmentType && serviceData.serviceFrequency))
  }

  const handleSubmit = () => {
    if (canSubmit() && onSubmit) {
      onSubmit(serviceData)
    }
  }

  const renderStepIndicator = () => (
    <Card className="border-input bg-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
                  isStepComplete(step.number) 
                    ? "bg-primary text-primary-foreground" 
                    : step.number === currentStep
                    ? "bg-muted text-foreground"
                    : "bg-muted/50 text-muted-foreground"
                )}>
                  {isStepComplete(step.number) && step.number < currentStep ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.number
                  )}
                </div>
                <span className={cn(
                  "text-sm font-medium",
                  isStepComplete(step.number) || step.number === currentStep
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}>
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-muted mx-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  const renderStep1 = () => (
    <Card className="border-input bg-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
            serviceData.property ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
          )}>
            {serviceData.property ? <Check className="h-5 w-5" /> : '1'}
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            Select Property
          </h3>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <select
              className="w-full px-4 py-3 bg-muted/50 border border-input rounded-lg text-foreground appearance-none cursor-pointer"
              value={serviceData.property?.id || ''}
              onChange={(e) => {
                const property = properties.find(p => p.id === e.target.value)
                setServiceData({ ...serviceData, property })
              }}
            >
              <option value="">Choose a property</option>
              {properties.map(property => (
                <option key={property.id} value={property.id}>
                  {property.name} - {property.address}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
          </div>

          {serviceData.property && (
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                <ImageIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">{serviceData.property.name}</p>
                <p className="text-sm text-muted-foreground">{serviceData.property.address}</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )

  const renderStep2 = () => (
    <Card className="border-input bg-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
            serviceData.serviceCategory ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
          )}>
            {serviceData.serviceCategory ? <Check className="h-5 w-5" /> : '2'}
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            Service Category
          </h3>
        </div>

        <p className="text-sm text-muted-foreground mb-4">Select Service Type</p>

        <div className="relative">
          <select
            className="w-full px-4 py-3 bg-muted/50 border border-input rounded-lg text-foreground appearance-none cursor-pointer"
            value={serviceData.serviceCategory || ''}
            onChange={(e) => {
              setServiceData({ 
                ...serviceData, 
                serviceCategory: e.target.value,
                serviceType: undefined // Reset service type when category changes
              })
            }}
          >
            <option value="">Choose a service category</option>
            {serviceCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
        </div>
      </CardContent>
    </Card>
  )

  const renderStep3 = () => (
    <Card className="border-input bg-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
            serviceData.serviceType ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
          )}>
            {serviceData.serviceType ? <Check className="h-5 w-5" /> : '3'}
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            Service Type
          </h3>
        </div>

        <p className="text-sm text-muted-foreground mb-4">Select Specific Service</p>

        <div className="relative">
          <select
            className="w-full px-4 py-3 bg-muted/50 border border-input rounded-lg text-foreground appearance-none cursor-pointer"
            value={serviceData.serviceType || ''}
            onChange={(e) => setServiceData({ ...serviceData, serviceType: e.target.value })}
            disabled={!serviceData.serviceCategory}
          >
            <option value="">Choose a specific service</option>
            {serviceData.serviceCategory && serviceTypes[serviceData.serviceCategory]?.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
        </div>
      </CardContent>
    </Card>
  )

  const renderStep4 = () => (
    <Card className="border-input bg-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
            <Check className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">
            Service Details
          </h3>
        </div>

        <div className="space-y-6">
          {serviceData.serviceCategory === 'Pool Maintenance' && (
            <>
              <div>
                <label className="text-sm font-medium text-foreground">Number of Pools</label>
                <Input
                  type="number"
                  min="1"
                  value={serviceData.numberOfPools || 1}
                  onChange={(e) => setServiceData({ ...serviceData, numberOfPools: parseInt(e.target.value) || 1 })}
                  className="mt-2"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Pool Type</label>
                <div className="relative mt-2">
                  <select
                    className="w-full px-4 py-3 bg-muted/50 border border-input rounded-lg text-foreground appearance-none cursor-pointer"
                    value={serviceData.poolType || ''}
                    onChange={(e) => setServiceData({ ...serviceData, poolType: e.target.value })}
                  >
                    <option value="">Select pool type</option>
                    {poolTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Equipment Type</label>
                <div className="relative mt-2">
                  <select
                    className="w-full px-4 py-3 bg-muted/50 border border-input rounded-lg text-foreground appearance-none cursor-pointer"
                    value={serviceData.equipmentType || ''}
                    onChange={(e) => setServiceData({ ...serviceData, equipmentType: e.target.value })}
                  >
                    <option value="">Select equipment type</option>
                    {equipmentTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Service Type</label>
                <div className="relative mt-2">
                  <select
                    className="w-full px-4 py-3 bg-muted/50 border border-input rounded-lg text-foreground appearance-none cursor-pointer"
                    value={serviceData.serviceFrequency || ''}
                    onChange={(e) => setServiceData({ ...serviceData, serviceFrequency: e.target.value })}
                  >
                    <option value="">Select frequency</option>
                    {serviceFrequencies.map(freq => (
                      <option key={freq} value={freq}>{freq}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="text-sm font-medium text-foreground">
              Additional Notes (Optional)
            </label>
            <Textarea
              placeholder="Any additional requirements or notes..."
              value={serviceData.additionalNotes || ''}
              onChange={(e) => setServiceData({ ...serviceData, additionalNotes: e.target.value })}
              className="mt-2 min-h-[120px]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className={cn("w-full space-y-6", className)}>
      {renderStepIndicator()}

      {/* Step Content */}
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && (
        <>
          {renderStep1()}
          {renderStep2()}
        </>
      )}
      {currentStep === 3 && (
        <>
          {renderStep1()}
          {renderStep2()}
          {renderStep3()}
        </>
      )}
      {currentStep === 4 && renderStep4()}

      {/* Submit Button */}
      <Card className="border-input bg-card">
        <CardContent className="p-6">
          <Button
            className="w-full"
            size="lg"
            disabled={!canSubmit()}
            onClick={canSubmit() ? handleSubmit : () => setCurrentStep(Math.min(currentStep + 1, 4))}
          >
            {canSubmit() ? 'Submit Service Request' : 'Submit Service Request'}
          </Button>
          {!canSubmit() && (
            <p className="text-sm text-muted-foreground text-center mt-2">
              Please complete all required fields to submit your request
            </p>
          )}
        </CardContent>
      </Card>

      {/* Navigation for demo */}
      {currentStep < 4 && isStepComplete(currentStep) && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.min(currentStep + 1, 4))}
          >
            Continue to Step {currentStep + 1}
          </Button>
        </div>
      )}
    </div>
  )
}

export default AddNewServiceStepper