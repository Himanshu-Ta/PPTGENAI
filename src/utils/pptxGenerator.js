import html2canvas from 'html2canvas';

// Helper function to pause execution briefly, allowing the DOM to update.
const delay = (ms) => new Promise(res => setTimeout(res, ms));

/**
 * This function orchestrates the report generation by communicating with the backend.
 * @param {Array} selectedReports - An array of objects for the reports the user selected.
 * @param {Function} setActiveTab - The state setter function to change the active UI tab.
 */
export const generatePPT = async (selectedReports, setActiveTab) => {
  if (!selectedReports || selectedReports.length === 0) {
      alert("Please select at least one report to generate.");
      return;
  }

  try {
    const imageDataUrls = {};
    const originalTab = selectedReports[0]?.tab || 'Market Projections';

    // 1. Capture screenshots of all selected charts from the UI.
    for (const report of selectedReports) {
        // Switch to the correct tab to make the element visible.
        setActiveTab(report.tab);
        // Wait for the tab to switch and for chart animations to complete.
        await delay(500); 

        const element = document.getElementById(report.elementId);
        if (!element) {
            console.error(`Element with ID '${report.elementId}' not found!`);
            continue; // Skip this report if its element doesn't exist.
        }

        const captureElement = element.querySelector('.chart-capture-area');
        if (!captureElement) {
            console.error(`Capture area (.chart-capture-area) not found for report ID '${report.id}'`);
            continue;
        }

        // Generate the screenshot.
        const canvas = await html2canvas(captureElement, { 
            scale: 2, 
            useCORS: true, 
            backgroundColor: '#ffffff' 
        });
        // Store the image data as a Base64 string.
        imageDataUrls[report.id] = canvas.toDataURL('image/png');
    }

    // 2. Send the captured data to the Python backend.
    const response = await fetch('https://1deaf7bf19e9.ngrok-free.app/generate-ppt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            selectedReports: selectedReports,
            imageDataUrls: imageDataUrls,
        }),
    });

    if (!response.ok) {
        throw new Error(`Server responded with an error: ${response.status}`);
    }

    // 3. Receive the generated .pptx file and trigger the download.
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'Dashboard_ppt_gen.pptx';
    document.body.appendChild(a);
    a.click();
    
    // Clean up the temporary URL.
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    // Switch the UI back to the first tab for a good user experience.
    setActiveTab(originalTab);

  } catch (error) {
    console.error("Fatal error during PowerPoint generation:", error);
    alert(`A critical error occurred while generating the PowerPoint presentation: ${error.message}`);
  }
};



// import PptxGenJS from 'pptxgenjs';
// import html2canvas from 'html2canvas';

// // --- SLIDE MASTER DEFINITIONS ---

// const TITLE_PAGE_MASTER = {
//   title: 'TITLE_PAGE_MASTER',
//   background: { path: 'assets/title-background.jpg' },
//   objects: [
//     { rect: { x: 0, y: 5.4, w: '100%', h: 2.1, fill: { color: 'FFFFFF' } } },
//     { text: { text: 'PORTFOLIO STRATEGY WORKSHOP', options: { x: 0.6, y: 5.8, w: '80%', fontSize: 24, fontFace: 'Arial', color: 'F58220', bold: true } } },
//     { text: { text: 'Pre-read', options: { x: 0.6, y: 6.2, w: '80%', fontSize: 18, fontFace: 'Arial', color: '6E6E6E' } } },
//     { image: { x: 11.5, y: 5.8, w: 1.5, h: 0.6, path: 'assets/imperial-logo.png' } },
//   ],
// };

// const CONTENTS_MASTER = {
//   title: 'CONTENTS_MASTER',
//   background: { color: 'FFFFFF' },
//   objects: [
//     { image: { x: 11.5, y: 0.4, w: 1.5, h: 0.6, path: 'assets/imperial-logo.png' } },
//     { text: { text: 'Strictly Private & Confidential', options: { x: 0.5, y: 7.1, fontFace: 'Arial', fontSize: 9, color: '808080' } } },
//   ],
//   slideNumber: { x: 12.8, y: 7.1, fontFace: 'Arial', fontSize: 10, color: '808080' },
// };

// const DEFAULT_MASTER = {
//   title: 'DEFAULT_MASTER',
//   background: { color: 'F1F1F1' },
//   objects: [
//     { rect: { x: 0, y: 6.9, w: '100%', h: 0.6, fill: { color: '003b75' } } },
//     { text: { text: 'Strictly Private & Confidential', options: { x: 0.5, y: 7.0, fontFace: 'Arial', fontSize: 12, color: 'FFFFFF' } } },
//     { image: { x: 12.0, y: 6.95, w: 0.8, h: 0.4, path: 'assets/placeholder-logo.png' } },
//   ],
//   slideNumber: { x: 0.5, y: 7.15, fontFace: 'Arial', fontSize: 10, color: 'FFFFFF' },
// };

// const CUSTOM_HEADER_MASTER = (activeTab) => ({
//   title: `HEADER_MASTER_${activeTab.replace(/ /g, '_')}`,
//   background: { color: 'FFFFFF' },
//   objects: [
//     { rect: { x: 0, y: 0, w: '100%', h: 0.75, fill: { color: 'F1F1F1' } } },
//     ...['Market Projections', 'Category Overview', 'Consumer Overview', 'A&P Overview'].map((tab, index) => ({
//         shape: { type: 'chevron', options: { x: 1.0 + (index * 1.9), y: 0.15, w: 2.0, h: 0.45, fill: { color: tab === activeTab ? 'F58220' : '6E6E6E' } } }
//     })),
//     ...['Market Projections', 'Category Overview', 'Consumer Overview', 'A&P Overview'].map((tab, index) => ({
//         text: { text: tab, options: { x: 1.0 + (index * 1.9), y: 0.15, w: 2.0, h: 0.45, align: 'center', valign: 'middle', color: 'FFFFFF', fontSize: 10, bold: tab === activeTab } }
//     })),
//     { image: { x: 11.5, y: 0.1, w: 1.5, h: 0.6, path: 'assets/imperial-logo.png' } },
//     { text: { text: 'Strictly Private & Confidential – This is a working document created for discussion purposes only. Nothing contained in this document represents the agreed position of Imperial Brands.', options: { x: 0.5, y: 7.1, fontFace: 'Arial', fontSize: 9, color: '808080' } } },
//   ],
//   slideNumber: { x: 12.5, y: 7.1, fontFace: 'Arial', fontSize: 10, color: '808080', bold: true },
// });

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

// export const generatePPT = async (selectedReports, setActiveTab) => {
//   if (!selectedReports || selectedReports.length === 0) {
//       alert("Please select at least one report to generate.");
//       return;
//   }
  
//   let pptx;
//   try {
//     pptx = new PptxGenJS();
//     pptx.layout = 'LAYOUT_WIDE';

//     // Define all master slide templates
//     pptx.defineSlideMaster(TITLE_PAGE_MASTER);
//     pptx.defineSlideMaster(CONTENTS_MASTER);
//     // pptx.defineSlideMaster(DEFAULT_MASTER);
//     pptx.defineSlideMaster(CUSTOM_HEADER_MASTER('Market Projections'));
//     pptx.defineSlideMaster(CUSTOM_HEADER_MASTER('Category Overview'));
//     pptx.defineSlideMaster(CUSTOM_HEADER_MASTER('Consumer Overview'));

//     pptx.addSlide({ masterName: 'TITLE_PAGE_MASTER' });

//     let contentsSlide = pptx.addSlide({ masterName: 'CONTENTS_MASTER' });
//     contentsSlide.addText('Contents', { x: 0.6, y: 1.8, w: '80%', fontSize: 20, fontFace: 'Arial', color: '6E6E6E' });
    
//     let contentY = 2.8;
//     selectedReports.forEach((report, index) => {
//         contentsSlide.addText(`${index + 1}.`, { x: 1.0, y: contentY, w: '5%', fontSize: 18, color: 'A9A9A9' });
//         contentsSlide.addText(report.label, { x: 1.5, y: contentY, w: '80%', fontSize: 18, color: 'A9A9A9', hyperlink: { slide: index + 3 } });
//         contentY += 0.6;
//     });

//     for (const report of selectedReports) {
//         setActiveTab(report.tab);
//         await delay(500);

//         try {
//             const element = document.getElementById(report.elementId);
//             if (!element) throw new Error(`Element with ID '${report.elementId}' not found!`);
            
//             const keyMessage = element.querySelector('.key-message p')?.innerText || '[Type key message]';
//             const captureElement = element.querySelector('.chart-capture-area');
//             if (!captureElement) throw new Error(`Capture area (.chart-capture-area) not found for report ID '${report.id}'`);

//             const canvas = await html2canvas(captureElement, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
//             const dataUrl = canvas.toDataURL('image/png');
            
//             let slide = pptx.addSlide({ masterName: report.master });
//             slide.addText(report.title, { x: 0.5, y: 0.9, w: '90%', h: 0.5, fontSize: 22, bold: true, color: 'F58220' });
//             slide.addShape('rect', { x: 0.5, y: 1.5, w: '93%', h: 0.5, fill: { color: 'FFFFFF' }, line: { color: 'D3D3D3', width: 1 } });
//             slide.addText(`▪ ${keyMessage}`, { x: 0.6, y: 1.55, w: '90%', h: 0.4, fontSize: 12, color: '333333' });
//             slide.addImage({ data: dataUrl, x: 0.5, y: 2.2, w: 12.3, h: 4.5 });

//         } catch (slideError) {
//             console.error(`Failed to generate slide for "${report.label}":`, slideError);
//             let errorSlide = pptx.addSlide({ masterName: 'DEFAULT_MASTER' });
//             errorSlide.addText(`Error generating slide: ${report.label}`, { x: 0.5, y: 2.5, w: '90%', align: 'center', fontSize: 24, color: 'CC0000' });
//             errorSlide.addText(slideError.message, { x: 0.5, y: 3.5, w: '90%', align: 'center', fontSize: 12, color: '333333' });
//         }
//     }
    
//     setActiveTab('Market Projections');
//     pptx.writeFile({ fileName: 'Dashboard_Report_Final.pptx' });

//   } catch (error) {
//     console.error("Fatal error generating PPT:", error);
//     alert("A critical error occurred while generating the PowerPoint presentation. Please check the console for more details.");
//   }
// };
