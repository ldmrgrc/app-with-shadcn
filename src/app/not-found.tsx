import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-lvh">
        <div className="text-center">
            <h1 className="text-4xl font-medium">404</h1>
            <p className="text-xl font-medium m-6">Sorry, the page you are looking for cannot be found.</p>
            <Link href="/" className="bg-primary/70 hover:bg-primary text-white py-2 px-4 rounded">Go Home</Link>
        </div>
    </div>
  )
}