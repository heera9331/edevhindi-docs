import React from 'react';

const ContributeSection = () => {
  return (
    <div className="p-8 mb-12 border border-blue-100 rounded-lg bg-blue-50">
      <h3 className="mb-4 text-2xl font-bold text-gray-800">Contribute to edevhindi</h3>
      <p className="mb-6 text-gray-600">
        हम सभी योगदानकर्ताओं का स्वागत करते हैं। आप निम्नलिखित तरीकों से योगदान कर सकते हैं:
      </p>
      <ul className="space-y-2 text-gray-600 list-disc list-inside">
        <li>टेक्निकल आर्टिकल्स लिखकर</li>
        <li>प्रोग्रामिंग ट्यूटोरियल्स बनाकर</li>
        <li>हैंडव्रिटन नोट्स शेयर करके</li>
        <li>वेबसाइट में सुधार के सुझाव देकर</li>
      </ul>
    </div>
  );
};

export default ContributeSection;