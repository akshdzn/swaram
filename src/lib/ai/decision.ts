import { pipeline } from "@huggingface/transformers";

let classifier: any = null;

export async function initModel() {
    if (classifier) return classifier;

    classifier = await pipeline(
        'zero-shot-classification',
        'Xenova/mobilebert-uncased-mnli',
        {
            progress_callback: (progressData) => {
                if (progressData.status === 'progress') {
                    const percent = Math.round(progressData.progress || 0);
                    console.log(`Downloading ${progressData.file}: ${percent}%`);
                } else if (progressData.status === 'ready') {
                    console.log(`Finished loading: ${progressData.task}`);
                }
            }
        }
    );

    return classifier;
}

export async function askClassifier() {
    let result = await classifier(
        'summer at the beach',
        ['fireplace', 'rain', 'ocean waves', 'wind', 'thunder'],
        { multi_label: true }
    );

    return result
}