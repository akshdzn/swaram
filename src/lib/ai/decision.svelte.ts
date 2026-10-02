import { pipeline } from "@huggingface/transformers";

import Sounds from "../sounds.json";
let SoundsArray = Sounds;
let tags = new Set(SoundsArray.flatMap(s => s.tags));

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

export async function askClassifier(prompt: string, tags: Set<string>) {
    let result = await classifier(
        prompt,
        [...tags],
        { multi_label: true }
    );

    return result
}

export async function chooseTags(prompt: string) {
    const result = await askClassifier(prompt, tags);

    let selectedTags: string[] = [];
    result.scores.forEach((score: number, index: number) => {
        if (score > 0.8) {
            selectedTags.push(result.labels[index])
        }
    });

    console.log(selectedTags)
}