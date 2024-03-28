import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
  description: 'Example users page.',
};

export default function UsersPage() {
  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
        {/* <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div> */}
      </div>
    </main>
  );
}