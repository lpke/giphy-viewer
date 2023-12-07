import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;

    const res = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${
        process.env.GIPHY_API_KEY
      }&${searchParams.toString()}`,
    );
    const data = await res.json();
    return Response.json(data, {
      status: data?.meta?.status,
    });
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
