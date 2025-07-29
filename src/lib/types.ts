/**
 * Type definitions for the CERV Technician Mobile App
 */

/**
 * Customer information associated with a job
 */
export interface Customer {
  id: string
  name: string
  avatar?: string
  phone: string
  email?: string
}

/**
 * Service types available in the platform
 */
export type ServiceType = 'pool' | 'lawn' | 'exterior'

/**
 * Priority levels for jobs
 */
export type Priority = 'high' | 'medium' | 'low'

/**
 * Job status tracking
 */
export type JobStatus = 'pending' | 'en-route' | 'in-progress' | 'completed'

/**
 * Service requirement details
 */
export interface ServiceRequirement {
  id: string
  type: ServiceType
  description: string
  estimatedDuration: number // in minutes
  specialInstructions?: string
}

/**
 * Complete job information
 */
export interface Job {
  id: string
  customer: Customer
  serviceType: ServiceType
  priority: Priority
  status: JobStatus
  scheduledTime: Date
  earnings: number
  address: string
  coordinates?: {
    lat: number
    lng: number
  }
  serviceRequirements: ServiceRequirement[]
  notes?: string
  completedAt?: Date
  startedAt?: Date
}