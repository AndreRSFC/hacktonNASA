import mongoose from 'mongoose';

const ObservatoryLocationsSchema = new mongoose.Schema(
    {
        observtorySymbol: {
            type: String,
            required: true,
            unique: true,
        },
        latitude: {
            type: Number,
            required: true,
        },
        longitute: {
            type: Number,
            required: true,
        },
        time: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('ObservatoryLocations', ObservatoryLocationsSchema);