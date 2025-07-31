'use client'

import React from 'react'
import { MessageListItem } from '@/components/cerv/MessageListItem'
import { ThemeToggle } from '@/components/theme-toggle'

export default function TestMessageItemPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle - Top Right Corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-sm mx-auto space-y-4">
        <h2 className="text-lg font-semibold mb-4">Message List Items</h2>
        
        {/* Unread message example */}
        <div className="bg-card rounded-lg overflow-hidden border border-input">
          <MessageListItem
            customerName="Jennifer Wilson"
            message="Perfect! You can leave the materials on the patio. Thanks!"
            timestamp="2 min ago"
            isUnread={true}
            onClick={() => console.log('Clicked unread message')}
          />
        </div>

        {/* Read message example */}
        <div className="bg-card rounded-lg overflow-hidden border border-input">
          <MessageListItem
            customerName="Michael Chen"
            message="Thanks for servicing the pool today. Everything looks great!"
            timestamp="1 hour ago"
            isUnread={false}
            onClick={() => console.log('Clicked read message')}
          />
        </div>

        {/* Multiple messages stacked */}
        <div className="bg-card rounded-lg overflow-hidden border border-input">
          <MessageListItem
            customerName="Sarah Johnson"
            message="The gate code is 1234 if you need it."
            timestamp="3 hours ago"
            isUnread={false}
            onClick={() => console.log('Message 1')}
          />
          <MessageListItem
            customerName="Emily Rodriguez"
            message="Can you come a bit earlier next week? Around 9 AM?"
            timestamp="yesterday"
            isUnread={false}
            onClick={() => console.log('Message 2')}
          />
          <MessageListItem
            customerName="David Thompson"
            message="I'll be out of town but my neighbor will let you in."
            timestamp="2 days ago"
            isUnread={false}
            onClick={() => console.log('Message 3')}
          />
        </div>
      </div>
    </div>
  )
}