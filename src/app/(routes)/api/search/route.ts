import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    return Response.json({}, { status: 200 });
  } catch (err) {
    return Response.json(
      {
        message:
          'An internal error occured while trying to fetch data from Giphy.',
        error: err,
      },
      { status: 500 },
    );
  }
}
