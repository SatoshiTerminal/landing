import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phoneNumber, country, whoAreYou, messageHearAbout } = body;

    // Check if required fields are present
    if (!firstName) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          errors: [{ field: 'firstName', message: 'First name is required' }],
          message: 'Input validation failed.',
        }),
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          errors: [{ field: 'email', message: 'Please enter a valid email' }],
          message: 'Input validation failed.',
        }),
        { status: 400 }
      );
    }

    // Add the user to the waiting list
    const data = { firstName, lastName, email, phoneNumber, country, whoAreYou, messageHearAbout };
    // TODO: Add code to save the data to the waiting list

    return new NextResponse(
      JSON.stringify({
        success: true,
        data,
        message: "You're added to our waiting list. Thank you!",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'Something went wrong. Please try again later.',
      }),
      { status: 500 }
    );
  }
}


// POST /api/waiting-list

// Body:
// {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	email: 'john@gmail.com',
// 	phoneNumber: '(555) 555-1234',
// 	country: 'United States',
// 	whoAreYou: 'Private Investor',
// 	messageHearAbout: 'Test from john'
// }

// Response:
// Code 200
// {
// 	success: true,
// 	data: {
// 		firstName: 'John',
// 		lastName: 'Doe',
// 		email: 'john@gmail.com',
// 		phoneNumber: '(555) 555-1234',
// 		country: 'United States',
// 		whoAreYou: 'Private Investor',
// 		messageHearAbout: 'Test from john'
// 	},
// 	message: 'You're added to our waiting list. Thank you!'
// }

// Code 400
// {
// 	success: false,
// 	errors: [
// 		{
// 			field: 'firstName',
// 			message: 'First name is required'
// 		},
// 		{
// 			field: 'email',
// 			message: 'Please enter a valid email'
// 		},
// 	],
// 	message: 'Input validation failed.'
// }

// Code 500
// {
// 	success: false,
// 	message: 'Something went wrong. Please try again later.'
// }