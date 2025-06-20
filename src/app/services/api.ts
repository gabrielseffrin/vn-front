const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function generateReportPdf(params: any) {
    
    try {
        const res = await fetch(`${apiBaseUrl}/tickets/pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
    
      return res.blob();
    } catch (error) {
        console.error('Error fetching tickets:', error);
        throw new Error('Failed to fetch tickets');
    }  
}

export async function getCustomers() {

    try {
        const res = await fetch(`${apiBaseUrl}/entities`, { 
            method: 'GET',
        });

        if (!res.ok) {
            const errorData = await res.json();
            console.error('Error fetching customers:', errorData);
            throw new Error(errorData.message || 'Failed to fetch customers');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching customers:', error);
        throw new Error('Failed to fetch customers: ' + (error instanceof Error ? error.message : String(error)));
    }
}