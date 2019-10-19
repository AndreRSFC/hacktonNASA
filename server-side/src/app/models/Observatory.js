import mongoose from 'mongoose';

const ObservatorySchema = new mongoose.Schema(
    {
        symbol: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        resolution: {
            type: Number,
            required: true,
        },
        startTime: {
            type: Date,
            required: true,
        },
        endTime: {
            type: Date,
            required: true,
        },
        properties: [
            {
                description: {
                    type: String,
                    required: false,
                },
                releaseDate: {
                    type: Date,
                    required: true,
                }
            }
        ]
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Observatory', ObservatorySchema);